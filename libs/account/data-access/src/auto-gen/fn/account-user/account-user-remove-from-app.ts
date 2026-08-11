/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountUserRemoveOrAddToAppDto } from '../../models/account-user-remove-or-add-to-app-dto';

export interface AccountUserRemoveFromApp$Params {
      body: AccountUserRemoveOrAddToAppDto
}

export function accountUserRemoveFromApp(http: HttpClient, rootUrl: string, params: AccountUserRemoveFromApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserRemoveFromApp.PATH, 'delete');
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

accountUserRemoveFromApp.PATH = '/api/v1/account-users/remove-from-app';
