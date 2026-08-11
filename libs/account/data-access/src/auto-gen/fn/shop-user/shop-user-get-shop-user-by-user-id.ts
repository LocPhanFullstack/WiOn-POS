/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserDto } from '../../models/shop-user-dto';

export interface ShopUserGetShopUserByUserId$Params {

/**
 * Id tài khoản (WiAccount Id)
 */
  accountId: string;
}

export function shopUserGetShopUserByUserId(http: HttpClient, rootUrl: string, params: ShopUserGetShopUserByUserId$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
  const rb = new RequestBuilder(rootUrl, shopUserGetShopUserByUserId.PATH, 'get');
  if (params) {
    rb.path('accountId', params.accountId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ShopUserDto>;
    })
  );
}

shopUserGetShopUserByUserId.PATH = '/api/v1/shop-users/by-user-id/{accountId}';
