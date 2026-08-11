/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResetPasswordEmailDto2 } from '../../models/reset-password-email-dto-2';
import { ResetPasswordEmailResultDto } from '../../models/reset-password-email-result-dto';

export interface AccountResetPasswordEmail2$Params {
      body: ResetPasswordEmailDto2
}

export function accountResetPasswordEmail2(http: HttpClient, rootUrl: string, params: AccountResetPasswordEmail2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ResetPasswordEmailResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountResetPasswordEmail2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ResetPasswordEmailResultDto>;
    })
  );
}

accountResetPasswordEmail2.PATH = '/api/v2/account/reset-password/email';
