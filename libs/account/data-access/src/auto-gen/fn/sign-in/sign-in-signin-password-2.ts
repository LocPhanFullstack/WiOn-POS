/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignInPasswordDto } from '../../models/sign-in-password-dto';

export interface SignInSigninPassword2$Params {
  tenant?: string | null;
  permissions?: string | null;
  
    /**
     * Số điện thoại và mật khẩu
     */
    body: SignInPasswordDto
}

export function signInSigninPassword2(http: HttpClient, rootUrl: string, params: SignInSigninPassword2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, signInSigninPassword2.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.header('permissions', params.permissions, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Blob>;
    })
  );
}

signInSigninPassword2.PATH = '/api/v1/sign-in/password';
