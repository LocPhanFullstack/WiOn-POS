import { takeUntil } from 'rxjs';
import { SignInService } from '@wion-fnb/account/data-access';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSDestroyService } from 'tds-ui/core/services';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { TDSModalModule, TDSModalService } from 'tds-ui/modal';
import { TDSMapperPipeModule } from 'tds-ui/cdk/pipes/mapper';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TDSStatisticModule } from 'tds-ui/statistic';
import { WAuthService } from '@wion-fnb/shared/services';
import {
  blob2json,
  parseErrorBody,
  parseErrorCode,
} from '@wion-fnb/shared/utils';
import { TDSAlertModule } from 'tds-ui/alert';
import {
  TDSNotificationModule,
  TDSNotificationService,
} from 'tds-ui/notification';
import { TDSConfigService } from 'tds-ui/core/config';
import { HttpErrorResponse } from '@angular/common/http';
import { WPTokenDTO } from '@wion-fnb/shared/components';
import {
  WPPasswordDirective,
  WPPhoneNumberDirective,
} from '@wion-fnb/shared/directives';
import { DateHelperService } from 'tds-ui/i18n';
// import { ModalForgotPasswordComponent } from '@wion-pos/account/ui';
import { WIMfConfigService } from '@wi-mfes/config';

const directives = [WPPasswordDirective, WPPhoneNumberDirective];

@Component({
  selector: 'wion-fnb-login',
  standalone: true,
  imports: [
    CommonModule,
    TDSFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TDSInputModule,
    TDSButtonModule,
    TDSSpinnerModule,
    TDSInputNumberModule,
    TDSModalModule,
    TDSMapperPipeModule,
    TDSStatisticModule,
    TDSAlertModule,
    TDSNotificationModule,
    RouterModule,
    ...directives,
  ],
  providers: [TDSDestroyService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full flex',
  },
})
export class LoginComponent implements OnInit {
  _form!: FormGroup;
  gateway = localStorage.getItem('GATEWAY_URL');
  isSubmit = false;
  isLoading = false;
  isShowPassword = false;

  visibleAlert = false;
  alertMessage = '';

  failedCount = 0;
  overviewUrl = '/dashboard/overview';
  private mfeService = inject(WIMfConfigService);

  constructor(
    private signInService: SignInService,
    private authService: WAuthService,
    private modalService: TDSModalService,
    private fb: FormBuilder,
    private notification: TDSNotificationService,
    private tdsConfigService: TDSConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private destroy$: TDSDestroyService,
    private viewContainerRef: ViewContainerRef,
    private dateService: DateHelperService
  ) {
    this.createForm();
  }

  createForm() {
    this._form = this.fb.group({
      PhoneNumber: [
        null,
        Validators.compose([Validators.required, this.validatePhoneNumber()]),
      ],
      Password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.isDevMode) {
      if (!this.gateway || this.gateway == 'null') {
        const gateway = this.mfeService.getRemoteConfig('account')?.gatewayUrl;
        this.setGateWayURL(gateway ?? '');
      }
    }

    this.tdsConfigService.set('notification', { maxStack: 2 });
    const phoneNumber = this.route.snapshot.queryParams['phoneNumber'];
    if (phoneNumber) {
      this._form.controls['PhoneNumber'].setValue(phoneNumber);
    }
  }

  onInputPassword() {
    this.alertMessage = '';
  }

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  validatePhoneNumber(): ValidatorFn {
    return (control: AbstractControl) => {
      const text = control.value as string;
      const regex = new RegExp('^[0-9]{9,10}$');

      if (TDSHelperString.hasValueString(text)) {
        if (regex.test(text)) {
          if (text.length == 10 && !text.startsWith('0')) {
            return { invalid: true };
          }

          return null;
        } else {
          return { invalid: true };
        }
      } else {
        return { required: true };
      }
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this._form.controls[controlName]?.hasError(errorName);
  };

  public setErrors(errorName: string, validators: ValidationErrors) {
    this._form.controls[errorName]?.setErrors(validators);
  }

  public clearErrors(errorName: string) {
    this._form.controls[errorName].clearValidators();
  }

  onInputPhoneNumber(event: TDSSafeAny) {
    this.alertMessage = '';
  }

  validateLoginError(error: HttpErrorResponse | null) {
    if (!error || error.status == 0 || error.status >= 500) {
      this.notification.error(
        'Đã có lỗi xảy ra',
        '<span class="w-[320px]">Hệ thống đang gặp sự cố kỹ thuật. Bạn vui lòng thử lại sau.</span>'
      );
    } else {
      const code = parseErrorCode(error);
      const errorData = parseErrorBody(error)?.error;
      const passwordFailCache = errorData?.data?.passwordFailCache;
      if (passwordFailCache && passwordFailCache.isLock) {
        this.showModalLockAccount(
          passwordFailCache.expireTime,
          errorData?.data?.minute ?? 30
        );
      } else {
        switch (code) {
          case 'Authentication.Account:0003':
          case 'Authentication.SignIn:0009':
          case 'Authentication.SignUp:0011':
            this.alertMessage = `Tài khoản không đúng hoặc chưa được đăng ký. Vui lòng thử lại.`;
            break;
          default:
            this.notification.error(
              'Đã có lỗi xảy ra',
              `<span class="w-[320px]">${errorData.message}</span>`
            );
            break;
        }
      }
    }
  }

  preparePhoneNumber(phoneNumber: string) {
    if (
      phoneNumber &&
      phoneNumber.length == 9 &&
      !phoneNumber.startsWith('0')
    ) {
      return '0' + phoneNumber;
    } else {
      return phoneNumber;
    }
  }

  showModalLockAccount(expireDate: string, minutes: number) {
    this.modalService.error({
      title: 'Thông báo',
      content: `Tài khoản bị tạm khóa trong ${minutes} phút.<br/>
        Vui lòng thử lại sau <span class="font-semibold">${this.dateService.format(
          new Date(expireDate),
          'HH:mm'
        )}</span>`,
      okText: null,
      cancelText: 'Đóng',
    });
  }

  login() {
    this._form.markAllAsTouched();
    this.isSubmit = true;
    const data = this._form.value;
    if (
      this._form.controls['PhoneNumber'].valid &&
      TDSHelperString.hasValueString(data.Password)
    ) {
      this.isLoading = true;
      this.cdr.markForCheck();

      this.signInService
        .signInSigninPassword2({
          body: {
            phoneNumber: this.preparePhoneNumber(data.PhoneNumber),
            password: data.Password,
            scope: '',
          },
        })
        .pipe(
          blob2json<WPTokenDTO>(),
          this.authService.afterRequestToken(),
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigateByUrl(this.overviewUrl);
            this.cdr.markForCheck();
          },
          error: (error: HttpErrorResponse) => {
            this.isLoading = false;
            this.validateLoginError(error);
            this.cdr.markForCheck();
          },
        });
    }
  }

  openForgotPassword(event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();

    // const modal = this.modalService.create({
    //   content: ModalForgotPasswordComponent,
    //   bodyStyle: {
    //     padding: '24px',
    //   },
    //   closable: false,
    //   footer: null,
    //   viewContainerRef: this.viewContainerRef,
    // });

    // modal.componentInstance?.approveChange
    //   .pipe((x) => x)
    //   .subscribe({
    //     next: (res) => {
    //       if (res) {
    //         setTimeout(() => {
    //           this.directForgotPassword(this._form.value.PhoneNumber);
    //         }, 300);
    //       }
    //       modal.close();
    //       this.cdr.detectChanges();
    //     },
    //   });
    console.log('Hi');
  }

  openWiAccountLoginLink() {
    const redirect_uri = encodeURIComponent(
      `${window.location.origin}/#/account/callback`
    );
    window.open(
      `${this.gateway}/authentication/api/v1/oauth/connect?redirect_uri=${redirect_uri}`,
      '_self'
    );
  }

  directSignUpPage() {
    this.router.navigateByUrl('/account/sign-up');
  }

  directForgotPassword(phoneNumber?: string) {
    let url = `/account/forgot-password`;
    if (phoneNumber) {
      url = url + `?phoneNumber=${phoneNumber}`;
    }
    this.router.navigateByUrl(url);
  }

  setGateWayURL(url: string) {
    localStorage.setItem('GATEWAY_URL', url);
    window.location.reload();
  }

  changeGateway() {
    if (localStorage.getItem('GATEWAY_URL') != this.gateway) {
      this.setGateWayURL(this.gateway ?? '');
    }
  }

  get isDevMode() {
    const key_env = this.mfeService.getDefaultConfig().environment;
    return !!key_env && (key_env == 'DEV' || key_env == 'QA');
  }
}
