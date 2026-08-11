/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddUserToAppDto } from '../../models/add-user-to-app-dto';
import { AddUserToAppResultDto } from '../../models/add-user-to-app-result-dto';

export interface AccountUserAddUserToApp$Params {
      body: AddUserToAppDto
}

export function accountUserAddUserToApp(http: HttpClient, rootUrl: string, params: AccountUserAddUserToApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<AddUserToAppResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountUserAddUserToApp.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<AddUserToAppResultDto>;
    })
  );
}

accountUserAddUserToApp.PATH = '/api/v2/account-user/add-to-app';
