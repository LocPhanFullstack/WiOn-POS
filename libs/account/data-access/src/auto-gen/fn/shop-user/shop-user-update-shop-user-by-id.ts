/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserUpdateDto } from '../../models/shop-user-update-dto';

export interface ShopUserUpdateShopUserById$Params {

/**
 * Id nhân viên
 */
  shopUserId: number;
      body: ShopUserUpdateDto
}

export function shopUserUpdateShopUserById(http: HttpClient, rootUrl: string, params: ShopUserUpdateShopUserById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shopUserUpdateShopUserById.PATH, 'put');
  if (params) {
    rb.path('shopUserId', params.shopUserId, {});
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

shopUserUpdateShopUserById.PATH = '/api/v1/shop-users/{shopUserId}';
