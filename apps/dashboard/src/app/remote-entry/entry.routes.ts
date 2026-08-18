import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { DashboardLayoutComponent } from '../components';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    providers: [],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: DashboardLayoutComponent,
      },
    ],
  },
];
