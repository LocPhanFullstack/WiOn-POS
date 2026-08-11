/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CheckUserPasswordDto } from '../../models/check-user-password-dto';
import { CheckUserPasswordResponseDto } from '../../models/check-user-password-response-dto';

export interface AccountCheckPassword$Params {
      body: CheckUserPasswordDto
}

export function accountCheckPassword(http: HttpClient, rootUrl: string, params: AccountCheckPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CheckUserPasswordResponseDto>> {
  const rb = new RequestBuilder(rootUrl, accountCheckPassword.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<CheckUserPasswordResponseDto>;
    })
  );
}

accountCheckPassword.PATH = '/api/v1/account/check-password';
