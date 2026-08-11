/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FnbPermissionGrantGroupDto } from '../../models/fnb-permission-grant-group-dto';

export interface FnbRoleGet$Params {

/**
 * Id vai trò
 */
  id: number;
}

export function fnbRoleGet(http: HttpClient, rootUrl: string, params: FnbRoleGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>> {
  const rb = new RequestBuilder(rootUrl, fnbRoleGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

fnbRoleGet.PATH = '/api/v1/fnb-roles/{id}/permissions';
