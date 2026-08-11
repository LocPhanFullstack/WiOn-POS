/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SendSmsOtpDto } from '../../models/send-sms-otp-dto';

export interface AccountResetPasswordSmsSend$Params {
      body: SendSmsOtpDto
}

export function accountResetPasswordSmsSend(http: HttpClient, rootUrl: string, params: AccountResetPasswordSmsSend$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordSmsSend.PATH, 'post');
  if (params) {
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

accountResetPasswordSmsSend.PATH = '/api/v1/account/reset-password/sms/send-otp';
