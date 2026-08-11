/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetPermissionListResultDto } from '../../models/get-permission-list-result-dto';

export interface PermissionsGet$Params {
  providerName?: string | null;
  providerKey?: string | null;
}

export function permissionsGet(http: HttpClient, rootUrl: string, params?: PermissionsGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<GetPermissionListResultDto>> {
  const rb = new RequestBuilder(rootUrl, permissionsGet.PATH, 'get');
  if (params) {
    rb.query('providerName', params.providerName, {});
    rb.query('providerKey', params.providerKey, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<GetPermissionListResultDto>;
    })
  );
}

permissionsGet.PATH = '/api/permission-management/permissions';
