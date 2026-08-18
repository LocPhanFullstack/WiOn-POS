import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { WAuthGuardService } from '@wion-fnb/shared/services';
import { LayoutComponent } from './components';

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      loadRemoteModule('account', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [WAuthGuardService],
    children: [
      {
        path: 'shop',
        loadChildren: () =>
          loadRemoteModule('shop', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          loadRemoteModule('dashboard', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: '',
        redirectTo: '/dashboard/overview',
        pathMatch: 'full',
      },
    ],
  },
];
