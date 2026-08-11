/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignInPasswordDto2 } from '../../models/sign-in-password-dto-2';
import { SignInPasswordResultDto } from '../../models/sign-in-password-result-dto';

export interface SignInSignInPassword$Params {
  tenant?: string | null;
  permissions?: string | null;
      body: SignInPasswordDto2
}

export function signInSignInPassword(http: HttpClient, rootUrl: string, params: SignInSignInPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInPasswordResultDto>> {
  const rb = new RequestBuilder(rootUrl, signInSignInPassword.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.header('permissions', params.permissions, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SignInPasswordResultDto>;
    })
  );
}

signInSignInPassword.PATH = '/api/v2/sign-in/password';
