/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WiOnPosSignUpVerifyOtpRequestDto } from '../../models/wi-on-pos-sign-up-verify-otp-request-dto';

export interface SignUpVerifyOtp$Params {
      body: WiOnPosSignUpVerifyOtpRequestDto
}

export function signUpVerifyOtp(http: HttpClient, rootUrl: string, params: SignUpVerifyOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, signUpVerifyOtp.PATH, 'post');
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

signUpVerifyOtp.PATH = '/api/v1/sign-up/verify-otp';
