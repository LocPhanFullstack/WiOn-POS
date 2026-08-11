/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserDto } from '../../models/shop-user-dto';

export interface FnbShopUserGetShopUser$Params {

/**
 * Id nhân viên
 */
  shopUserId: number;
}

export function fnbShopUserGetShopUser(http: HttpClient, rootUrl: string, params: FnbShopUserGetShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
  const rb = new RequestBuilder(rootUrl, fnbShopUserGetShopUser.PATH, 'get');
  if (params) {
    rb.path('shopUserId', params.shopUserId, {});
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

fnbShopUserGetShopUser.PATH = '/api/v1/fnb-shop-users/{shopUserId}';
