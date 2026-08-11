/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserDto } from '../../models/shop-user-dto';

export interface ShopUserGetCurrentShopUser$Params {
}

export function shopUserGetCurrentShopUser(http: HttpClient, rootUrl: string, params?: ShopUserGetCurrentShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
  const rb = new RequestBuilder(rootUrl, shopUserGetCurrentShopUser.PATH, 'get');
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

shopUserGetCurrentShopUser.PATH = '/api/v1/shop-users/current';
