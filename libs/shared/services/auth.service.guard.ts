import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { TDSHelperObject, TDSHelperString } from 'tds-ui/shared/utility';
import { WAuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
// @ts-ignore
export class WAuthGuardService {
  constructor(public router: Router, public auth: WAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.getCacheToken().pipe(
      switchMap((data) => {
        if (
          TDSHelperObject.hasValue(data) &&
          TDSHelperString.hasValueString(data?.accessToken)
        ) {
          return of(true);
        } else {
          return of(this.router.createUrlTree(['/account/login']));
        }
      }),
      catchError((err) => {
        return of(this.router.createUrlTree(['/account/login']));
      })
    );
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.getCacheToken().pipe(
      switchMap((data) => {
        if (
          TDSHelperObject.hasValue(data) &&
          TDSHelperString.hasValueString(data?.accessToken)
        ) {
          return of(true);
        } else {
          return of(this.router.createUrlTree(['/account/login']));
        }
      }),
      catchError((err) => {
        return of(this.router.createUrlTree(['/account/login']));
      })
    );
  }
}
