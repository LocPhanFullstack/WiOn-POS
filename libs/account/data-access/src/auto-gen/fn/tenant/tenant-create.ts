/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantCreateDto } from '../../models/tenant-create-dto';
import { TenantDto } from '../../models/tenant-dto';

export interface TenantCreate$Params {
      body: TenantCreateDto
}

export function tenantCreate(http: HttpClient, rootUrl: string, params: TenantCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TenantDto>> {
  const rb = new RequestBuilder(rootUrl, tenantCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<TenantDto>;
    })
  );
}

tenantCreate.PATH = '/api/multi-tenancy/tenants';
