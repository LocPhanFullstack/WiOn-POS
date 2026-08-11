import { Route } from '@angular/router';
import { AccountLayoutComponent } from '../layout/layout.component';
import { provideFNBAccountApiModule } from '@wion-fnb/account/data-access';
import { LoginComponent } from '@wion-fnb/account/feature';
import { WIMfConfigService } from '@wi-mfes/config';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: AccountLayoutComponent,
    providers: [
      provideFNBAccountApiModule({
        useFactory: (cs: WIMfConfigService) => ({
          rootUrl: `${cs.getRemoteConfig('account')?.gatewayUrl}/authentication`
        }),
        deps: [WIMfConfigService]
      }),
    ],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ]
  },
];
