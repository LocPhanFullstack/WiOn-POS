import { Route } from '@angular/router';
import { PageNotFoundComponent } from '@wion-fnb/error/feature';
import { RemoteEntryComponent } from './entry.component';
import { WI_PERMISSION_CONTEXT, WIPermissionContext } from '@wi-mfes/perm';
import { Optional, SkipSelf } from '@angular/core';
import { ShopLayoutComponent } from '../components';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    providers: [
      {
        provide: WI_PERMISSION_CONTEXT,
        useFactory: (parent: WIPermissionContext) => parent,
        deps: [[new Optional(), new SkipSelf(), WI_PERMISSION_CONTEXT]],
      },
    ],
    children: [
      {
        path: '',
        component: ShopLayoutComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];
