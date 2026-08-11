/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FnbRoleCreateOrUpdateDto } from '../../models/fnb-role-create-or-update-dto';
import { RoleDto } from '../../models/role-dto';

export interface FnbRoleCreateRoleWithPermissions$Params {
      body: FnbRoleCreateOrUpdateDto
}

export function fnbRoleCreateRoleWithPermissions(http: HttpClient, rootUrl: string, params: FnbRoleCreateRoleWithPermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<RoleDto>> {
  const rb = new RequestBuilder(rootUrl, fnbRoleCreateRoleWithPermissions.PATH, 'post');
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

fnbRoleCreateRoleWithPermissions.PATH = '/api/v1/fnb-roles/with-permissions';
