/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AllUserShopListDto } from '../../models/all-user-shop-list-dto';

export interface ShopGetAllUserShopList$Params {
}

export function shopGetAllUserShopList(http: HttpClient, rootUrl: string, params?: ShopGetAllUserShopList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<AllUserShopListDto>> {
  const rb = new RequestBuilder(rootUrl, shopGetAllUserShopList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<AllUserShopListDto>;
    })
  );
}

shopGetAllUserShopList.PATH = '/api/v1/shops/all';
