import { Route } from '@angular/router';
import { provideFNBAccountApiModule } from '@wion-fnb/account/data-access';
import { WIMfConfigService } from '@wi-mfes/config';
import { RemoteEntryComponent } from './entry.component';
import { AccountLayoutComponent } from '../components';
import { LoginComponent } from '../components/login/login.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        component: AccountLayoutComponent,
        providers: [
          provideFNBAccountApiModule({
            useFactory: (cs: WIMfConfigService) => ({
              rootUrl: `${
                cs.getRemoteConfig('account')?.gatewayUrl
              }/authentication`,
            }),
            deps: [WIMfConfigService],
          }),
        ],
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
        ],
      },
    ],
  },
];
