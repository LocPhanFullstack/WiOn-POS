import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSStatisticModule } from 'tds-ui/statistic';
import { TDSOtpInputModule } from 'tds-ui/otp';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSHelperString } from 'tds-ui/shared/utility';
import { ChangePasswordNotificationComponent } from './change-password-notification/change-password-notification.component';
import { VerifyNewPasswordComponent } from './verify-new-password/verify-new-password.component';

const cmp = [ChangePasswordNotificationComponent, VerifyNewPasswordComponent];

@Component({
  selector: 'wion-fnb-change-password',
  standalone: true,
  templateUrl: './change-password.component.html',
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
    TDSInputNumberModule,
    TDSStatisticModule,
    TDSOtpInputModule,
    TDSModalModule,
    ...cmp,
  ],
  providers: [TDSDestroyService],
  host: {
    class: 'w-full h-full flex',
  },
})
export class ModalChangePasswordComponent implements OnInit {
  @Output() completeChangePassword = new EventEmitter<boolean>();
  step = 1;

  constructor() {}

  ngOnInit(): void {}

  approveChange(event: boolean) {
    if (event) {
      this.step = 2;
    } else {
      this.completeChangePassword.emit(false);
    }
  }

  completeChange(event: boolean) {
    if (event) {
      const apiGateway = localStorage.getItem('GATEWAY_URL') as string;
      localStorage.clear();
      sessionStorage.clear();
      if (TDSHelperString.hasValueString(apiGateway)) {
        localStorage.setItem('GATEWAY_URL', apiGateway);
      }
      this.step = 3;
    } else {
      this.completeChangePassword.emit(false);
    }
  }

  logOut() {
    this.completeChangePassword.emit(true);
  }
}
