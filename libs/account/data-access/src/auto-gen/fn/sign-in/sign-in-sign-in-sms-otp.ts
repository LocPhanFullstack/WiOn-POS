/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SignInSmsOtpDto } from '../../models/sign-in-sms-otp-dto';

export interface SignInSignInSmsOtp$Params {

/**
 * id khách thuê
 */
  tenant?: string | null;

/**
 * id
 */
  permissions?: string | null;
  
    /**
     * Số điện thoại và mã otp
     */
    body: SignInSmsOtpDto
}

export function signInSignInSmsOtp(http: HttpClient, rootUrl: string, params: SignInSignInSmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, signInSignInSmsOtp.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.header('permissions', params.permissions, {});
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

signInSignInSmsOtp.PATH = '/api/v1/sign-in/otpsms';
