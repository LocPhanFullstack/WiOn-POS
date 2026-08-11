/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TenantGetDefaultConnectionString$Params {
  id: string;
}

export function tenantGetDefaultConnectionString(http: HttpClient, rootUrl: string, params: TenantGetDefaultConnectionString$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, tenantGetDefaultConnectionString.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<string>;
    })
  );
}

tenantGetDefaultConnectionString.PATH = '/api/multi-tenancy/tenants/{id}/default-connection-string';
