/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TenantDto } from '../../models/tenant-dto';
import { TenantUpdateDto } from '../../models/tenant-update-dto';

export interface TenantUpdate$Params {
  id: string;
      body: TenantUpdateDto
}

export function tenantUpdate(http: HttpClient, rootUrl: string, params: TenantUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TenantDto>> {
  const rb = new RequestBuilder(rootUrl, tenantUpdate.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

tenantUpdate.PATH = '/api/multi-tenancy/tenants/{id}';
