/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TenantDelete$Params {
  id: string;
}

export function tenantDelete(http: HttpClient, rootUrl: string, params: TenantDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, tenantDelete.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

tenantDelete.PATH = '/api/multi-tenancy/tenants/{id}';
