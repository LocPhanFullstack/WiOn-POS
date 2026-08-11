/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FnbRoleCreateOrUpdateDto } from '../../models/fnb-role-create-or-update-dto';

export interface FnbRoleUpdateRole$Params {

/**
 * Id vai trò
 */
  id: number;
      body: FnbRoleCreateOrUpdateDto
}

export function fnbRoleUpdateRole(http: HttpClient, rootUrl: string, params: FnbRoleUpdateRole$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, fnbRoleUpdateRole.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

fnbRoleUpdateRole.PATH = '/api/v1/fnb-roles/{id}';
