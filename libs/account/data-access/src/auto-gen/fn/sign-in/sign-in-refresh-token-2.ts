/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RefreshTokenDto2 } from '../../models/refresh-token-dto-2';
import { SignInOriginalResultDto } from '../../models/sign-in-original-result-dto';

export interface SignInRefreshToken2$Params {
      body: RefreshTokenDto2
}

export function signInRefreshToken2(http: HttpClient, rootUrl: string, params: SignInRefreshToken2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInOriginalResultDto>> {
  const rb = new RequestBuilder(rootUrl, signInRefreshToken2.PATH, 'post');
  if (params) {
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

signInRefreshToken2.PATH = '/api/v2/sign-in/refresh-token';
