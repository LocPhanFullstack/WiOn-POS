/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApplicationApiDescriptionModel } from '../../models/application-api-description-model';

export interface AbpApiDefinitionGet$Params {
  IncludeTypes?: boolean;
}

export function abpApiDefinitionGet(http: HttpClient, rootUrl: string, params?: AbpApiDefinitionGet$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ApplicationApiDescriptionModel>> {
  const rb = new RequestBuilder(rootUrl, abpApiDefinitionGet.PATH, 'get');
  if (params) {
    rb.query('IncludeTypes', params.IncludeTypes, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<ApplicationApiDescriptionModel>;
    })
  );
}

abpApiDefinitionGet.PATH = '/api/abp/api-definition';
