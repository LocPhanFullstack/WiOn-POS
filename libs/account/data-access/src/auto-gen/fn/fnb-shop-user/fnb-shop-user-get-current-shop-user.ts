/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserDto } from '../../models/shop-user-dto';

export interface FnbShopUserGetCurrentShopUser$Params {
}

export function fnbShopUserGetCurrentShopUser(http: HttpClient, rootUrl: string, params?: FnbShopUserGetCurrentShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
  const rb = new RequestBuilder(rootUrl, fnbShopUserGetCurrentShopUser.PATH, 'get');
  if (params) {
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

fnbShopUserGetCurrentShopUser.PATH = '/api/v1/fnb-shop-users/current';
