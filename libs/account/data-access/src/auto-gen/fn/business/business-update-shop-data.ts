/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BusinessUpdateShopDataDto } from '../../models/business-update-shop-data-dto';

export interface BusinessUpdateShopData$Params {
      body: BusinessUpdateShopDataDto
}

export function businessUpdateShopData(http: HttpClient, rootUrl: string, params: BusinessUpdateShopData$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, businessUpdateShopData.PATH, 'post');
  if (params) {
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

businessUpdateShopData.PATH = '/api/v1/businesses/update-shop-data';
