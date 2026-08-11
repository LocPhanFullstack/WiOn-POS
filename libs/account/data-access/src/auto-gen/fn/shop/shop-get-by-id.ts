/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopDto } from '../../models/shop-dto';

export interface ShopGetById$Params {

/**
 * Id cửa hàng
 */
  id: number;
}

export function shopGetById(http: HttpClient, rootUrl: string, params: ShopGetById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopDto>> {
  const rb = new RequestBuilder(rootUrl, shopGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ShopDto>;
    })
  );
}

shopGetById.PATH = '/api/v1/shops/{id}';
