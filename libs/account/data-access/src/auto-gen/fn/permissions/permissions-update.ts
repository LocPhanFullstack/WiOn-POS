/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdatePermissionsDto } from '../../models/update-permissions-dto';

export interface PermissionsUpdate$Params {
  providerName?: string | null;
  providerKey?: string | null;
      body: UpdatePermissionsDto
}

export function permissionsUpdate(http: HttpClient, rootUrl: string, params: PermissionsUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, permissionsUpdate.PATH, 'put');
  if (params) {
    rb.query('providerName', params.providerName, {});
    rb.query('providerKey', params.providerKey, {});
    rb.body(params.body, 'application/json');
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

permissionsUpdate.PATH = '/api/permission-management/permissions';
