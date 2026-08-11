/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PermissionGroupDto } from '../../models/permission-group-dto';

export interface PermissionGetAssignable$Params {
}

export function permissionGetAssignable(http: HttpClient, rootUrl: string, params?: PermissionGetAssignable$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<PermissionGroupDto>>> {
  const rb = new RequestBuilder(rootUrl, permissionGetAssignable.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<PermissionGroupDto>>;
    })
  );
}

permissionGetAssignable.PATH = '/api/v1/permissions/assignable';
