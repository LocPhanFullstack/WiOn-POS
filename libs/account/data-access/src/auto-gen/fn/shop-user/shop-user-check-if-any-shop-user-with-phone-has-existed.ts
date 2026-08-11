/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserPhoneCheckResultDto } from '../../models/shop-user-phone-check-result-dto';

export interface ShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params {
  phone?: string | null;
}

export function shopUserCheckIfAnyShopUserWithPhoneHasExisted(http: HttpClient, rootUrl: string, params?: ShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>> {
  const rb = new RequestBuilder(rootUrl, shopUserCheckIfAnyShopUserWithPhoneHasExisted.PATH, 'get');
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

shopUserCheckIfAnyShopUserWithPhoneHasExisted.PATH = '/api/v1/shop-users/check-existed-by-phone';
