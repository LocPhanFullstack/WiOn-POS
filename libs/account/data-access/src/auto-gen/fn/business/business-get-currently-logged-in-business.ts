/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BusinessDto } from '../../models/business-dto';

export interface BusinessGetCurrentlyLoggedInBusiness$Params {
}

export function businessGetCurrentlyLoggedInBusiness(http: HttpClient, rootUrl: string, params?: BusinessGetCurrentlyLoggedInBusiness$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<BusinessDto>> {
  const rb = new RequestBuilder(rootUrl, businessGetCurrentlyLoggedInBusiness.PATH, 'get');
  if (params) {
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

businessGetCurrentlyLoggedInBusiness.PATH = '/api/v1/businesses/current';
