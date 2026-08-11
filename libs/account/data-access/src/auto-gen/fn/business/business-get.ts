/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BusinessDto } from '../../models/business-dto';

export interface BusinessGet$Params {

/**
 * ID doanh nghiệp
 */
  id: number;
}

export function businessGet(http: HttpClient, rootUrl: string, params: BusinessGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<BusinessDto>> {
  const rb = new RequestBuilder(rootUrl, businessGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<BusinessDto>;
    })
  );
}

businessGet.PATH = '/api/v1/businesses/{id}';
