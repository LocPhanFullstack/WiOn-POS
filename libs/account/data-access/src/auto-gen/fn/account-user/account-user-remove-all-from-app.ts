/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountUserRemoveAllFromAppDto } from '../../models/account-user-remove-all-from-app-dto';

export interface AccountUserRemoveAllFromApp$Params {
      body: AccountUserRemoveAllFromAppDto
}

export function accountUserRemoveAllFromApp(http: HttpClient, rootUrl: string, params: AccountUserRemoveAllFromApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserRemoveAllFromApp.PATH, 'delete');
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

accountUserRemoveAllFromApp.PATH = '/api/v1/account-users/clear-user-app';
