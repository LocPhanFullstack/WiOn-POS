/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserDto } from '../../models/shop-user-dto';

export interface FnbShopUserGetShopUserByUserId$Params {

/**
 * Id tài khoản (WiAccount Id)
 */
  accountId: string;
}

export function fnbShopUserGetShopUserByUserId(http: HttpClient, rootUrl: string, params: FnbShopUserGetShopUserByUserId$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
  const rb = new RequestBuilder(rootUrl, fnbShopUserGetShopUserByUserId.PATH, 'get');
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

fnbShopUserGetShopUserByUserId.PATH = '/api/v1/fnb-shop-users/by-user-id/{accountId}';
