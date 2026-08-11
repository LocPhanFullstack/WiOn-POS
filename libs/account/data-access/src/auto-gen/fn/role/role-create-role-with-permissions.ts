/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';
import { RoleWithPermissionsCreateDto } from '../../models/role-with-permissions-create-dto';

export interface RoleCreateRoleWithPermissions$Params {
      body: RoleWithPermissionsCreateDto
}

export function roleCreateRoleWithPermissions(http: HttpClient, rootUrl: string, params: RoleCreateRoleWithPermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<RoleDto>> {
  const rb = new RequestBuilder(rootUrl, roleCreateRoleWithPermissions.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<RoleDto>;
    })
  );
}

roleCreateRoleWithPermissions.PATH = '/api/v1/roles/with-permissions';
