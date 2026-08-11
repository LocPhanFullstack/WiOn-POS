/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserProfileUpdateDto } from '../../models/user-profile-update-dto';

export interface AccountUpdateUserProfile$Params {
      body: UserProfileUpdateDto
}

export function accountUpdateUserProfile(http: HttpClient, rootUrl: string, params: AccountUpdateUserProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, accountUpdateUserProfile.PATH, 'post');
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

accountUpdateUserProfile.PATH = '/api/v1/account/profile';
