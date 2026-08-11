/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FnbPermissionGrantGroupDto } from '../../models/fnb-permission-grant-group-dto';

export interface FnbRoleGetCurrentRolePermissions$Params {
}

export function fnbRoleGetCurrentRolePermissions(http: HttpClient, rootUrl: string, params?: FnbRoleGetCurrentRolePermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>> {
  const rb = new RequestBuilder(rootUrl, fnbRoleGetCurrentRolePermissions.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>;
    })
  );
}

fnbRoleGetCurrentRolePermissions.PATH = '/api/v1/fnb-roles/current/permissions';
