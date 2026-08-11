/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InitializationStatusDto } from '../../models/initialization-status-dto';

export interface BusinessGetShopInitializationStatus$Params {

/**
 * ID doanh nghiệp
 */
  id: number;
}

export function businessGetShopInitializationStatus(http: HttpClient, rootUrl: string, params: BusinessGetShopInitializationStatus$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InitializationStatusDto>> {
  const rb = new RequestBuilder(rootUrl, businessGetShopInitializationStatus.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<InitializationStatusDto>;
    })
  );
}

businessGetShopInitializationStatus.PATH = '/api/v1/businesses/{id}/initialization-status';
