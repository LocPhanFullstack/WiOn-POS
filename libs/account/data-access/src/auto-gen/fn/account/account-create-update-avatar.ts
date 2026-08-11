/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserAvatarCreateUpdateDto } from '../../models/user-avatar-create-update-dto';

export interface AccountCreateUpdateAvatar$Params {
      body: UserAvatarCreateUpdateDto
}

export function accountCreateUpdateAvatar(http: HttpClient, rootUrl: string, params: AccountCreateUpdateAvatar$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, accountCreateUpdateAvatar.PATH, 'put');
  if (params) {
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

accountCreateUpdateAvatar.PATH = '/api/v1/account/avatar';
