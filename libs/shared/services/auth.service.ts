import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  TDSSafeAny,
  TDSHelperObject,
  TDSHelperString,
} from 'tds-ui/shared/utility';
import { SignInService } from '@wion-fnb/account/data-access';
import { WPTokenDTO } from '@wion-fnb/shared/components';
import { FNBKEY_ACCESSTOKEN } from '../components/tokens/key-accesstoken.token';
import { CacheHelperService } from '../utils/helpers/cache-helper.service';

@Injectable({
  providedIn: 'root',
})
export class WAuthService {
  private _isLogin = false;
  private readonly authenObs = new BehaviorSubject<boolean>(false);

  // private page token map, get/set
  constructor(
    @Inject(FNBKEY_ACCESSTOKEN) private __keyBearerToken: string,
    private cacheHelperService: CacheHelperService,
    private signInService: SignInService
  ) {}

  //Thực thi việc gọi về Server để refresh token
  refreshToken(token: WPTokenDTO | null): Observable<TDSSafeAny> {
    //call api resfresh token
    return this.signInService
      .signInRefreshToken({
        body: {
          refreshToken: token?.refreshToken ? token?.refreshToken : '',
        },
      })

      .pipe(
        map((r: TDSSafeAny) => {
          if (TDSHelperObject.hasValue(r)) return JSON.parse(r);
          return r;
        }),
        tap((data: TDSSafeAny) => {
          this.setCacheToken(data);
        })
      );
  }

  //Thực thi get token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
  getCacheToken(): Observable<TDSSafeAny> {
    return this.cacheHelperService.getItem(this.__keyBearerToken).pipe(
      map((ops: TDSSafeAny) => {
        let token: WPTokenDTO | null = null;
        if (TDSHelperObject.hasValue(ops)) {
          token = {
            accessToken: ops.replaceAll('"', ''),
          };
        }
        this.updateIsLogin(
          TDSHelperObject.hasValue(token) &&
            TDSHelperString.hasValueString(token?.accessToken)
        );
        return token;
      })
    );
  }

  //Thực thi set token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
  setCacheToken(token: WPTokenDTO): void {
    this.cacheHelperService.setItem(
      this.__keyBearerToken,
      token.accessToken ?? ''
    );
  }

  getAuthenIsLogin() {
    return this.authenObs.asObservable();
  }

  getAccessToken(): WPTokenDTO | null {
    const cacheToken = localStorage.getItem(this.__keyBearerToken);
    if (cacheToken) {
      return { accessToken: cacheToken };
    }
    return null;
  }

  isLogin() {
    return this._isLogin;
  }

  afterRequestToken = () =>
    pipe(
      tap<WPTokenDTO>((token: WPTokenDTO) => {
        this.setCacheToken(token);
        this.updateIsLogin(
          TDSHelperObject.hasValue(token) &&
            TDSHelperString.hasValueString(token.accessToken)
        );
      }),
      catchError((err) => {
        const apiGateway = localStorage.getItem('GATEWAY_URL') as string;
        localStorage.clear();
        sessionStorage.clear();
        if (TDSHelperString.hasValueString(apiGateway)) {
          localStorage.setItem('GATEWAY_URL', apiGateway);
        }
        return throwError(() => err);
      })
    );

  private updateIsLogin(isLogin: boolean) {
    this._isLogin = isLogin;
    this.authenObs.next(isLogin);
  }
}
