/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopDto } from '../../models/shop-dto';

export interface ShopGet$Params {
}

export function shopGet(http: HttpClient, rootUrl: string, params?: ShopGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopDto>> {
  const rb = new RequestBuilder(rootUrl, shopGet.PATH, 'get');
  if (params) {
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

shopGet.PATH = '/api/v1/shops/current';
