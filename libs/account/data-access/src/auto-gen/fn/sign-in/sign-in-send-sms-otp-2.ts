/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SendSmsOtpDto2 } from '../../models/send-sms-otp-dto-2';
import { SendSmsOtpResultDto } from '../../models/send-sms-otp-result-dto';

export interface SignInSendSmsOtp2$Params {
  tenant?: string | null;
      body: SendSmsOtpDto2
}

export function signInSendSmsOtp2(http: HttpClient, rootUrl: string, params: SignInSendSmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SendSmsOtpResultDto>> {
  const rb = new RequestBuilder(rootUrl, signInSendSmsOtp2.PATH, 'post');
  if (params) {
    rb.header('tenant', params.tenant, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<SendSmsOtpResultDto>;
    })
  );
}

signInSendSmsOtp2.PATH = '/api/v2/sign-in/otpsms/send';
