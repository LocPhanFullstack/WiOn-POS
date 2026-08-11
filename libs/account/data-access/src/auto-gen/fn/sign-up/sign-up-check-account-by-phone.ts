/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CheckAccountByPhoneResponseDto } from '../../models/check-account-by-phone-response-dto';

export interface SignUpCheckAccountByPhone$Params {

/**
 * Số điện thoại đăng kí tài khoản
 */
  PhoneNumber?: string | null;
}

export function signUpCheckAccountByPhone(http: HttpClient, rootUrl: string, params?: SignUpCheckAccountByPhone$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CheckAccountByPhoneResponseDto>> {
  const rb = new RequestBuilder(rootUrl, signUpCheckAccountByPhone.PATH, 'get');
  if (params) {
    rb.query('PhoneNumber', params.PhoneNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<CheckAccountByPhoneResponseDto>;
    })
  );
}

signUpCheckAccountByPhone.PATH = '/api/v1/sign-up/check-by-phone';
