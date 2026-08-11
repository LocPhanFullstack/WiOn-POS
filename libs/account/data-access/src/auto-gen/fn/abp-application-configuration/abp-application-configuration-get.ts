/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationConfigurationDto } from '../../models/application-configuration-dto';

export interface AbpApplicationConfigurationGet$Params {
}

export function abpApplicationConfigurationGet(http: HttpClient, rootUrl: string, params?: AbpApplicationConfigurationGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ApplicationConfigurationDto>> {
  const rb = new RequestBuilder(rootUrl, abpApplicationConfigurationGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ApplicationConfigurationDto>;
    })
  );
}

abpApplicationConfigurationGet.PATH = '/api/abp/application-configuration';
