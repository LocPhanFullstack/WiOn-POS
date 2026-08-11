/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountUserRemoveOrAddToAppDto } from '../../models/account-user-remove-or-add-to-app-dto';

export interface AccountUserAddToApp$Params {
      body: AccountUserRemoveOrAddToAppDto
}

export function accountUserAddToApp(http: HttpClient, rootUrl: string, params: AccountUserAddToApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserAddToApp.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Blob>;
    })
  );
}

accountUserAddToApp.PATH = '/api/v1/account-users/add-to-app';
