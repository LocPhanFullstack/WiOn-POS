/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifyEmailOtpDto2 } from '../../models/verify-email-otp-dto-2';
import { VerifyOtpResultDto } from '../../models/verify-otp-result-dto';

export interface AccountResetPasswordVerifyEmailOtp2$Params {
      body: VerifyEmailOtpDto2
}

export function accountResetPasswordVerifyEmailOtp2(http: HttpClient, rootUrl: string, params: AccountResetPasswordVerifyEmailOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<VerifyOtpResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordVerifyEmailOtp2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<VerifyOtpResultDto>;
    })
  );
}

accountResetPasswordVerifyEmailOtp2.PATH = '/api/v2/account/reset-password/email/verify-otp';
