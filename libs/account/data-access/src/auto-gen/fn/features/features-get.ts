/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetFeatureListResultDto } from '../../models/get-feature-list-result-dto';

export interface FeaturesGet$Params {
  providerName?: string | null;
  providerKey?: string | null;
}

export function featuresGet(http: HttpClient, rootUrl: string, params?: FeaturesGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<GetFeatureListResultDto>> {
  const rb = new RequestBuilder(rootUrl, featuresGet.PATH, 'get');
  if (params) {
    rb.query('providerName', params.providerName, {});
    rb.query('providerKey', params.providerKey, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<GetFeatureListResultDto>;
    })
  );
}

featuresGet.PATH = '/api/feature-management/features';
