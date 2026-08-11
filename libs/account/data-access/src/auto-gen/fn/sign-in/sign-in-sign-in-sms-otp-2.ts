/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignInSmsOtpDto2 } from '../../models/sign-in-sms-otp-dto-2';
import { SignInSmsOtpResultDto } from '../../models/sign-in-sms-otp-result-dto';

export interface SignInSignInSmsOtp2$Params {
  tenant?: string | null;
  permissions?: string | null;
      body: SignInSmsOtpDto2
}

export function signInSignInSmsOtp2(http: HttpClient, rootUrl: string, params: SignInSignInSmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInSmsOtpResultDto>> {
  const rb = new RequestBuilder(rootUrl, signInSignInSmsOtp2.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.header('permissions', params.permissions, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SignInSmsOtpResultDto>;
    })
  );
}

signInSignInSmsOtp2.PATH = '/api/v2/sign-in/otpsms';
