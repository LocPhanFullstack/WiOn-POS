/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserPartialUpdateDto } from '../../models/shop-user-partial-update-dto';

export interface ShopUserPartialUpdateShopUserById$Params {

/**
 * Id nhân viên
 */
  shopUserId: number;
      body: ShopUserPartialUpdateDto
}

export function shopUserPartialUpdateShopUserById(http: HttpClient, rootUrl: string, params: ShopUserPartialUpdateShopUserById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shopUserPartialUpdateShopUserById.PATH, 'patch');
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

shopUserPartialUpdateShopUserById.PATH = '/api/v1/shop-users/{shopUserId}';
