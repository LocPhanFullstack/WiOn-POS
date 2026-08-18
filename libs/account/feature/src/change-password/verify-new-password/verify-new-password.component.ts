import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { AccountService } from '@wion-fnb/account/data-access';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSHelperString } from 'tds-ui/shared/utility';
import { TDSMessageService } from 'tds-ui/message';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSMapperPipeModule } from 'tds-ui/cdk/pipes/mapper';
import {
  parseErrorCode,
  WPErrorsHelperService,
  WPStringHelperService,
} from '@wion-fnb/shared/utils';
import { WPPasswordDirective } from '@wion-fnb/shared/directives';

const cmp = [WPPasswordDirective];

@Component({
  selector: 'wion-fnb-verify-new-password',
  standalone: true,
  templateUrl: './verify-new-password.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TDSFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TDSInputModule,
    TDSButtonModule,
    TDSSpinnerModule,
    TDSModalModule,
    TDSMapperPipeModule,
    ...cmp,
  ],
  providers: [TDSDestroyService, AccountService],
  host: {
    class: 'w-full h-full flex',
  },
})
export class VerifyNewPasswordComponent implements OnInit {
  @Output() completeChange = new EventEmitter<boolean>();

  _form!: FormGroup;
  isLoading = false;
  isShowCurrentPassword = false;
  isShowNewPassword = false;
  isShowConfirmPassword = false;
  isFocusConfirmPassword: boolean = false;
  isFocusNewPassword: boolean = false;
  isFocusCurrentPassword: boolean = false;
  isSubmit = false;

  constructor(
    private accountService: AccountService,
    private errorsHelperService: WPErrorsHelperService,
    private stringHelperService: WPStringHelperService,
    private message: TDSMessageService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private destroy$: TDSDestroyService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this._form = this.fb.group({
      CurrentPassword: [null, Validators.required],
      NewPassword: [null, Validators.required],
      ConfirmPassword: [null, Validators.required],
    });
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

  onChangePassword() {
    const newPassword = this._form.controls['NewPassword'].value;
    const currentPassword = this._form.controls['CurrentPassword'].value;
    const confirmPassword = this._form.controls['ConfirmPassword'].value;

    if (TDSHelperString.hasValueString(newPassword)) {
      if (currentPassword == newPassword) {
        this._form.controls['NewPassword'].setErrors({ incorrect: true });
      } else {
        if (RegExp(/^[a-zA-Z0-9\S]{8,16}$/).test(newPassword)) {
          this._form.controls['NewPassword'].setErrors(null);
        } else {
          this._form.controls['NewPassword'].setErrors({ pattern: true });
        }
      }
    } else {
      this._form.controls['NewPassword'].setErrors({ required: true });
    }

    if (TDSHelperString.hasValueString(confirmPassword)) {
      if (newPassword != confirmPassword) {
        this._form.controls['ConfirmPassword'].setErrors({ incorrect: true });
      } else {
        this._form.controls['ConfirmPassword'].setErrors(null);
      }
    } else {
      this._form.controls['ConfirmPassword'].setErrors({ required: true });
    }
  }

  onBlurCurrentPassword() {
    this.isFocusCurrentPassword = false;
  }

  onFocusCurrentPassword() {
    this.isFocusCurrentPassword = true;
  }

  showCurrentPassword() {
    this.isShowCurrentPassword = !this.isShowCurrentPassword;
  }

  onBlurNewPassword() {
    this.isFocusNewPassword = false;
  }

  onFocusNewPassword() {
    this.isFocusNewPassword = true;
  }

  showNewPassword() {
    this.isShowNewPassword = !this.isShowNewPassword;
  }

  onBlurConfirmPassword() {
    this.isFocusConfirmPassword = false;
  }

  onFocusConfirmPassword() {
    this.isFocusConfirmPassword = true;
  }

  showConfirmPassword() {
    this.isShowConfirmPassword = !this.isShowConfirmPassword;
  }

  onSave() {
    this._form.markAllAsTouched();
    this.isSubmit = true;

    if (this._form.valid) {
      this.isLoading = true;
      this.cdr.markForCheck();

      this.accountService
        .accountChangePassword({
          body: {
            currentPassword: this._form.value.CurrentPassword,
            newPassPassword: this._form.value.NewPassword,
          },
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.completeChange.emit(true);
            this.isLoading = false;
            this.cdr.markForCheck();
          },
          error: (error) => {
            this.isLoading = false;
            let code = parseErrorCode(error);
            switch (code) {
              case 'Account:UserProfile:00001':
                this._form.controls['CurrentPassword'].setErrors({
                  incorrect: true,
                });
                this.isSubmit = false;
                break;
              default:
                this.errorsHelperService.showMessageError(
                  error,
                  'Hệ thống đã xảy ra lỗi. vui lòng thử lại sau.'
                );
                break;
            }
            this.cdr.markForCheck();
          },
        });
    }
  }

  onClose() {
    this.completeChange.emit(false);
  }
}
