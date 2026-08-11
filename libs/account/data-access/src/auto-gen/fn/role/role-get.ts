/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PermissionGrantGroupDto } from '../../models/permission-grant-group-dto';

export interface RoleGet$Params {

/**
 * Id vai trò
 */
  id: number;
}

export function roleGet(http: HttpClient, rootUrl: string, params: RoleGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>> {
  const rb = new RequestBuilder(rootUrl, roleGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

roleGet.PATH = '/api/v1/roles/{id}/permissions';
