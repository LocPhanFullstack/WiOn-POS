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
import { TDSButtonModule } from 'tds-ui/button';
import { TDSFormFieldModule } from 'tds-ui/form-field';

@Component({
  selector: 'wion-fnb-change-password-notification',
  standalone: true,
  templateUrl: './change-password-notification.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TDSFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TDSButtonModule,
  ],
  host: {
    class: 'w-full h-full flex',
  },
})
export class ChangePasswordNotificationComponent implements OnInit {
  @Output() approveChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.approveChange.emit(false);
  }

  onOk() {
    this.approveChange.emit(true);
  }
}
