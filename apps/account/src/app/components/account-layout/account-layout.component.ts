import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDS_BASE_URL_IMAGE } from 'tds-ui/image';
import { WIMfConfigService } from '@wi-mfes/config';
import { WAuthService } from '@wion-fnb/shared/services';
import { filter, fromEvent, map, mergeMap, of, takeUntil } from 'rxjs';

@Component({
  selector: 'wion-fnb-account-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-layout.component.html',
  styleUrl: './account-layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService,
    {
      provide: TDS_BASE_URL_IMAGE,
      useFactory: (service: WIMfConfigService) => {
        const config = service.getRemoteConfig('account');
        return config ? config.assetsBaseUrl : '';
      },
      deps: [WIMfConfigService],
    },
  ],
})
export class AccountLayoutComponent implements OnInit {
  backgroundLogoUrl = 'assets/images/logos/backgound-logo.png';
  loginLogoUrl = 'assets/images/logos/login-logo.png';
  website = '';
  overviewUrl = '/dashboard/overview';
  private baseUrlImage = inject(TDS_BASE_URL_IMAGE);

  constructor(
    private authService: WAuthService,
    private destroy$: TDSDestroyService
  ) {}

  ngOnInit(): void {
    if (this.baseUrlImage) {
      this.backgroundLogoUrl = `${this.baseUrlImage}assets/images/logos/backgound-logo.png`;
      this.loginLogoUrl = `${this.baseUrlImage}assets/images/logos/login-logo.png`;
    }

    fromEvent(document, 'visibilitychange')
      .pipe(
        filter(() => !document.hidden),
        map(() => !document.hidden),
        mergeMap((visibility) => {
          if (visibility) {
            return this.authService.getCacheToken();
          }
          return of(null);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (token) => {
          if (token) {
            window.location.reload();
          }
        },
      });
  }
}
