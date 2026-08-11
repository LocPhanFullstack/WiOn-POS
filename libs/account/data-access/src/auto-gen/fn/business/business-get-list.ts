/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedResultDtoOfBusinessListItemDto } from '../../models/paged-result-dto-of-business-list-item-dto';

export interface BusinessGetList$Params {
}

export function businessGetList(http: HttpClient, rootUrl: string, params?: BusinessGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfBusinessListItemDto>> {
  const rb = new RequestBuilder(rootUrl, businessGetList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<PagedResultDtoOfBusinessListItemDto>;
    })
  );
}

businessGetList.PATH = '/api/v1/businesses';
