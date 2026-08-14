import { Route } from '@angular/router';
import { DashboardLayoutComponent } from '@wion-fnb/dashboard/feature';
import { RemoteEntryComponent } from './entry.component';

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
        component: DashboardLayoutComponent
      },
    ]
  },
];
