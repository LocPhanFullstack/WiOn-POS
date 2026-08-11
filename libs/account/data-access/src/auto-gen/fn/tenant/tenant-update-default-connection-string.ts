/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TenantUpdateDefaultConnectionString$Params {
  id: string;
  defaultConnectionString?: string | null;
}

export function tenantUpdateDefaultConnectionString(http: HttpClient, rootUrl: string, params: TenantUpdateDefaultConnectionString$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, tenantUpdateDefaultConnectionString.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('defaultConnectionString', params.defaultConnectionString, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as FNBAccountStrictHttpResponse<void>;
    })
  );
}

tenantUpdateDefaultConnectionString.PATH = '/api/multi-tenancy/tenants/{id}/default-connection-string';
