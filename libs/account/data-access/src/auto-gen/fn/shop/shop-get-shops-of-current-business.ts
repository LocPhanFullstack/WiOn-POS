/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedResultDtoOfShopDto } from '../../models/paged-result-dto-of-shop-dto';

export interface ShopGetShopsOfCurrentBusiness$Params {
}

export function shopGetShopsOfCurrentBusiness(http: HttpClient, rootUrl: string, params?: ShopGetShopsOfCurrentBusiness$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfShopDto>> {
  const rb = new RequestBuilder(rootUrl, shopGetShopsOfCurrentBusiness.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<PagedResultDtoOfShopDto>;
    })
  );
}

shopGetShopsOfCurrentBusiness.PATH = '/api/v1/shops/current-business';
