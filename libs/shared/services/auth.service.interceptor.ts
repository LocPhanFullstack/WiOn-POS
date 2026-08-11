import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { WAuthService } from './auth.service';
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { TDSSafeAny, TDSHelperObject, TDSHelperString } from 'tds-ui/shared/utility';
import { WIMfConfigService } from '@wi-mfes/config';

@Injectable()
// @ts-ignore
export class WAuthInterceptorService implements HttpInterceptor {
	refreshTokenInProgress = false;
	refreshTokenSubject = new BehaviorSubject<TDSSafeAny>(null);
	prefix: string = 'api/v1';
	private mfeService = inject(WIMfConfigService);

	constructor(private auth: WAuthService) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<TDSSafeAny> {
		req = this.addAuthenticationToken(req);
		return this.handleRequest(req, next);
	}

	handleRequest(req: HttpRequest<any>, next: HttpHandler) {
		let that = this;
		return next.handle(req).pipe(catchError((err) => {
			// lỗi 401 => lỗi xác thực do token hết hạn
			if (err.status == 401) {
				if (!this.refreshTokenInProgress) {
					this.refreshTokenInProgress = true;
					this.refreshTokenSubject.next(null);

					that.auth.refreshToken(this.auth.getAccessToken()).subscribe(
						{
							next: (data) => {
								this.refreshTokenInProgress = false;
								this.refreshTokenSubject.next(data);
								return next.handle(that.addAuthenticationToken(req));
							},
							error: (error) => {
								const apiGateway = localStorage.getItem('GATEWAY_URL') as string;
								localStorage.clear();
								sessionStorage.clear();
								if (TDSHelperString.hasValueString(apiGateway)) {
									localStorage.setItem('GATEWAY_URL', apiGateway);
								}
								setTimeout(() => {
									window.location.reload();
								}, 500);
								return throwError(() => error);
							}
						});
				}
				return this.refreshTokenSubject.pipe(
					filter(token => token !== null),
					take(1),
					switchMap((token) => next.handle(that.addAuthenticationToken(req)))
				);
			} else {
				// xử lý các lỗi khác
				return throwError(() => err);
			}
		}));
	}

	//Thực thi add authen token
	addAuthenticationToken(req: HttpRequest<TDSSafeAny>): HttpRequest<TDSSafeAny> {
		let token = this.auth.getAccessToken();
		let headers = {
			"Accept-Language": "vi,en;q=0.9,en-US;q=0.8",
			// "x-client-platform": "WEBAPP",
			// "x-api-version": "3.0.0",
			Language: this.mfeService.getManifest()?.default?.locale ?? 'vi',
		}

		if (TDSHelperObject.hasValue(this.auth.getAuthenIsLogin())
			&& TDSHelperObject.hasValue(token)
			&& TDSHelperString.hasValueString(token?.accessToken)
		) {
			headers = Object.assign(headers, { Authorization: "Bearer " + token?.accessToken })
		}
		req = req.clone({
			setHeaders: headers
		});
		return req;
	}
}


