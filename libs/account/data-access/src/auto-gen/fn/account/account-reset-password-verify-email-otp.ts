/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifyEmailOtpDto } from '../../models/verify-email-otp-dto';

export interface AccountResetPasswordVerifyEmailOtp$Params {
      body: VerifyEmailOtpDto
}

export function accountResetPasswordVerifyEmailOtp(http: HttpClient, rootUrl: string, params: AccountResetPasswordVerifyEmailOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordVerifyEmailOtp.PATH, 'post');
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

accountResetPasswordVerifyEmailOtp.PATH = '/api/v1/account/reset-password/email/verify-otp';
