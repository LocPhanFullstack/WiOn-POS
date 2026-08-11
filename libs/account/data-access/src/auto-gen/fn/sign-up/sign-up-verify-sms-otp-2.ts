/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignUpVerifyOtpResultDto } from '../../models/sign-up-verify-otp-result-dto';
import { VerifySmsOtpDto2 } from '../../models/verify-sms-otp-dto-2';

export interface SignUpVerifySmsOtp2$Params {
  tenant?: string | null;
      body: VerifySmsOtpDto2
}

export function signUpVerifySmsOtp2(http: HttpClient, rootUrl: string, params: SignUpVerifySmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignUpVerifyOtpResultDto>> {
  const rb = new RequestBuilder(rootUrl, signUpVerifySmsOtp2.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SignUpVerifyOtpResultDto>;
    })
  );
}

signUpVerifySmsOtp2.PATH = '/api/v2/sign-up/otpsms-verify';
