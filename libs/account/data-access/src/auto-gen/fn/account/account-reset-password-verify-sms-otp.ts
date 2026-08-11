/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifySmsOtpDto } from '../../models/verify-sms-otp-dto';

export interface AccountResetPasswordVerifySmsOtp$Params {
      body: VerifySmsOtpDto
}

export function accountResetPasswordVerifySmsOtp(http: HttpClient, rootUrl: string, params: AccountResetPasswordVerifySmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordVerifySmsOtp.PATH, 'post');
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

accountResetPasswordVerifySmsOtp.PATH = '/api/v1/account/reset-password/sms/verify-otp';
