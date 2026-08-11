/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignInClientDto2 } from '../../models/sign-in-client-dto-2';
import { SignInOriginalResultDto } from '../../models/sign-in-original-result-dto';

export interface SignInSignInPassword2$Params {
  tenant?: string | null;
      body: SignInClientDto2
}

export function signInSignInPassword2(http: HttpClient, rootUrl: string, params: SignInSignInPassword2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInOriginalResultDto>> {
  const rb = new RequestBuilder(rootUrl, signInSignInPassword2.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SignInOriginalResultDto>;
    })
  );
}

signInSignInPassword2.PATH = '/api/v2/sign-in/client';
