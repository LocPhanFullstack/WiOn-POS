/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifyOtpResultDto } from '../../models/verify-otp-result-dto';
import { VerifySmsOtpDto2 } from '../../models/verify-sms-otp-dto-2';

export interface AccountResetPasswordVerifySmsOtp2$Params {
      body: VerifySmsOtpDto2
}

export function accountResetPasswordVerifySmsOtp2(http: HttpClient, rootUrl: string, params: AccountResetPasswordVerifySmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<VerifyOtpResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordVerifySmsOtp2.PATH, 'post');
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

accountResetPasswordVerifySmsOtp2.PATH = '/api/v2/account/reset-password/sms/verify-otp';
