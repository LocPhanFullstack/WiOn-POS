/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PermissionGrantGroupDto } from '../../models/permission-grant-group-dto';

export interface RoleGetCurrentRolePermissions$Params {
}

export function roleGetCurrentRolePermissions(http: HttpClient, rootUrl: string, params?: RoleGetCurrentRolePermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>> {
  const rb = new RequestBuilder(rootUrl, roleGetCurrentRolePermissions.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>;
    })
  );
}

roleGetCurrentRolePermissions.PATH = '/api/v1/roles/current/permissions';
