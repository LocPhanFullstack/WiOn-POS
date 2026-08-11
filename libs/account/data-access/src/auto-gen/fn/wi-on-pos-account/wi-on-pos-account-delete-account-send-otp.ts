/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteAccountSendOtpDto } from '../../models/delete-account-send-otp-dto';
import { TokenDto } from '../../models/token-dto';

export interface WiOnPosAccountDeleteAccountSendOtp$Params {
      body: DeleteAccountSendOtpDto
}

export function wiOnPosAccountDeleteAccountSendOtp(http: HttpClient, rootUrl: string, params: WiOnPosAccountDeleteAccountSendOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TokenDto>> {
  const rb = new RequestBuilder(rootUrl, wiOnPosAccountDeleteAccountSendOtp.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<TokenDto>;
    })
  );
}

wiOnPosAccountDeleteAccountSendOtp.PATH = '/api/v1/wionpos-account/send-otp';
