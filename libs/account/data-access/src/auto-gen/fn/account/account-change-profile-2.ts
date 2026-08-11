/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountProfileUpdateDto2 } from '../../models/account-profile-update-dto-2';
import { AccountProfileUpdateResultDto } from '../../models/account-profile-update-result-dto';

export interface AccountChangeProfile2$Params {
      body: AccountProfileUpdateDto2
}

export function accountChangeProfile2(http: HttpClient, rootUrl: string, params: AccountChangeProfile2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<AccountProfileUpdateResultDto>> {
  const rb = new RequestBuilder(rootUrl, accountChangeProfile2.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<AccountProfileUpdateResultDto>;
    })
  );
}

accountChangeProfile2.PATH = '/api/v2/account/profile';
