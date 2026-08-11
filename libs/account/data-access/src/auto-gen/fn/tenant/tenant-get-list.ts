/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagedResultDtoOfTenantDto } from '../../models/paged-result-dto-of-tenant-dto';

export interface TenantGetList$Params {
  Filter?: string | null;
  Sorting?: string | null;
  SkipCount?: number;
  MaxResultCount?: number;
}

export function tenantGetList(http: HttpClient, rootUrl: string, params?: TenantGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfTenantDto>> {
  const rb = new RequestBuilder(rootUrl, tenantGetList.PATH, 'get');
  if (params) {
    rb.query('Filter', params.Filter, {});
    rb.query('Sorting', params.Sorting, {});
    rb.query('SkipCount', params.SkipCount, {});
    rb.query('MaxResultCount', params.MaxResultCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<PagedResultDtoOfTenantDto>;
    })
  );
}

tenantGetList.PATH = '/api/multi-tenancy/tenants';
