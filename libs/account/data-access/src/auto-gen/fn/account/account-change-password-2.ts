/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangePasswordDto2 } from '../../models/change-password-dto-2';
import { ChangePasswordResultDto } from '../../models/change-password-result-dto';

export interface AccountChangePassword2$Params {
      body: ChangePasswordDto2
}

export function accountChangePassword2(http: HttpClient, rootUrl: string, params: AccountChangePassword2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ChangePasswordResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountChangePassword2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ChangePasswordResultDto>;
    })
  );
}

accountChangePassword2.PATH = '/api/v2/account/change-password';
