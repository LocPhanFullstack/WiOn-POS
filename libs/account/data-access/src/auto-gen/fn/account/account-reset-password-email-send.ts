/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SendEmailOtpDto } from '../../models/send-email-otp-dto';

export interface AccountResetPasswordEmailSend$Params {
      body: SendEmailOtpDto
}

export function accountResetPasswordEmailSend(http: HttpClient, rootUrl: string, params: AccountResetPasswordEmailSend$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordEmailSend.PATH, 'post');
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

accountResetPasswordEmailSend.PATH = '/api/v1/account/reset-password/email/send-otp';
