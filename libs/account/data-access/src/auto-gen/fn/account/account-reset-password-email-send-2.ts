/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SendEmailOtpDto2 } from '../../models/send-email-otp-dto-2';
import { SendEmailOtpResultDto } from '../../models/send-email-otp-result-dto';

export interface AccountResetPasswordEmailSend2$Params {
      body: SendEmailOtpDto2
}

export function accountResetPasswordEmailSend2(http: HttpClient, rootUrl: string, params: AccountResetPasswordEmailSend2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SendEmailOtpResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordEmailSend2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SendEmailOtpResultDto>;
    })
  );
}

accountResetPasswordEmailSend2.PATH = '/api/v2/account/reset-password/email/send-otp';
