/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserProfileDto } from '../../models/user-profile-dto';

export interface UserProfileGetUserProfile$Params {
}

export function userProfileGetUserProfile(http: HttpClient, rootUrl: string, params?: UserProfileGetUserProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<UserProfileDto>> {
  const rb = new RequestBuilder(rootUrl, userProfileGetUserProfile.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<UserProfileDto>;
    })
  );
}

userProfileGetUserProfile.PATH = '/api/v1/user-profile';
