/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SignInSigninTenant$Params {

/**
 * Tenant Id
 */
  tenant?: string | null;
}

export function signInSigninTenant(http: HttpClient, rootUrl: string, params?: SignInSigninTenant$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, signInSigninTenant.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
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

signInSigninTenant.PATH = '/api/v1/sign-in/tenant';
