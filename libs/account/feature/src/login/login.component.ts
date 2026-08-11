import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSInputPasswordModule } from 'tds-ui/input-password';
import { SignInService } from '@wion-fnb/account/data-access';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageModule, TDSMessageService } from "tds-ui/message";
import { TDSSpinnerModule } from "tds-ui/progress-spinner";
import { WAuthService } from '@wion-fnb/shared';
import { finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterLink,
    TDSButtonModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSInputPasswordModule,
    TDSMessageModule,
    TDSSpinnerModule
  ],
  providers: [
    TDSDestroyService,
    WAuthService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loading = false;
  constructor(private signInService: SignInService,
    private authService: WAuthService,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {

  }

  readonly loginForm = new FormGroup({
    phoneNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.signInService.signInSignInPassword({
      body: {
        phoneNumber: this.loginForm.value.phoneNumber,
        password: this.loginForm.value.password
      }
    })
    .pipe(this.authService.afterRequestToken(),
      finalize(() => this.loading = false),
      takeUntil(this.destroy$))
    .subscribe({
      next: (res) => {
        this.router.navigateByUrl('/dashboard');
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.message.error(error.error.message);
        this.cdr.markForCheck();
      }
    })
  }

  updatePassword(password: string): void {
    this.loginForm.controls.password.setValue(password);
  }

  updatePasswordFocus(focused: boolean): void {
    if (!focused) {
      this.loginForm.controls.password.markAsTouched();
    }
  }
}
