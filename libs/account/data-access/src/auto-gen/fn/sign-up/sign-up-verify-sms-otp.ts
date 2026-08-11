/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VerifySmsOtpDto } from '../../models/verify-sms-otp-dto';

export interface SignUpVerifySmsOtp$Params {
  tenant?: string | null;
      body: VerifySmsOtpDto
}

export function signUpVerifySmsOtp(http: HttpClient, rootUrl: string, params: SignUpVerifySmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, signUpVerifySmsOtp.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
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

signUpVerifySmsOtp.PATH = '/api/v1/sign-up/otpsms-verify';
