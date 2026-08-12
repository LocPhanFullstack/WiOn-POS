import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'wion-fnb-account-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-layout.component.html',
  styleUrl: './account-layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLayoutComponent {
  website = '';
}
