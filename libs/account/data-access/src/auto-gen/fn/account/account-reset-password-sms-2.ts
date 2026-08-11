/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResetPasswordSmsDto2 } from '../../models/reset-password-sms-dto-2';
import { ResetPasswordSmsResultDto } from '../../models/reset-password-sms-result-dto';

export interface AccountResetPasswordSms2$Params {
      body: ResetPasswordSmsDto2
}

export function accountResetPasswordSms2(http: HttpClient, rootUrl: string, params: AccountResetPasswordSms2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ResetPasswordSmsResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordSms2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ResetPasswordSmsResultDto>;
    })
  );
}

accountResetPasswordSms2.PATH = '/api/v2/account/reset-password/sms';
