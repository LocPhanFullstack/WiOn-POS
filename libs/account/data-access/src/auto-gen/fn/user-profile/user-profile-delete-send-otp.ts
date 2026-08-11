/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteSendOtpDto } from '../../models/delete-send-otp-dto';

export interface UserProfileDeleteSendOtp$Params {
      body: DeleteSendOtpDto
}

export function userProfileDeleteSendOtp(http: HttpClient, rootUrl: string, params: UserProfileDeleteSendOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, userProfileDeleteSendOtp.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as FNBAccountStrictHttpResponse<void>;
    })
  );
}

userProfileDeleteSendOtp.PATH = '/api/v1/user-profile/delete-send-otp';
