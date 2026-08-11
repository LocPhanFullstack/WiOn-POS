/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SocialAccountAuthenDto } from '../../models/social-account-authen-dto';
import { SocialAccountSignInDto } from '../../models/social-account-sign-in-dto';

export interface SocialAccountAuthentication$Params {
  tenant?: string | null;
      body: SocialAccountAuthenDto
}

export function socialAccountAuthentication(http: HttpClient, rootUrl: string, params: SocialAccountAuthentication$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SocialAccountSignInDto>> {
  const rb = new RequestBuilder(rootUrl, socialAccountAuthentication.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SocialAccountSignInDto>;
    })
  );
}

socialAccountAuthentication.PATH = '/api/v1/social-account/authentication';
