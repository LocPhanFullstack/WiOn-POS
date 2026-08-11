/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignInOriginalResultDto } from '../../models/sign-in-original-result-dto';

export interface SignInSignInTenant$Params {
  tenant?: string | null;
}

export function signInSignInTenant(http: HttpClient, rootUrl: string, params?: SignInSignInTenant$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInOriginalResultDto>> {
  const rb = new RequestBuilder(rootUrl, signInSignInTenant.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
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

signInSignInTenant.PATH = '/api/v2/sign-in/tenant';
