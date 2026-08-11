/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserPhoneCheckResultDto } from '../../models/shop-user-phone-check-result-dto';

export interface FnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params {
  phone?: string | null;
}

export function fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted(http: HttpClient, rootUrl: string, params?: FnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>> {
  const rb = new RequestBuilder(rootUrl, fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted.PATH, 'get');
  if (params) {
    rb.query('phone', params.phone, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>;
    })
  );
}

fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted.PATH = '/api/v1/fnb-shop-users/check-existed-by-phone';
