/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteAccountVerifyPasswordDto } from '../../models/delete-account-verify-password-dto';
import { TransactionDto } from '../../models/transaction-dto';

export interface WiOnPosAccountDeleteAccountVerifyPassword$Params {
      body: DeleteAccountVerifyPasswordDto
}

export function wiOnPosAccountDeleteAccountVerifyPassword(http: HttpClient, rootUrl: string, params: WiOnPosAccountDeleteAccountVerifyPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TransactionDto>> {
  const rb = new RequestBuilder(rootUrl, wiOnPosAccountDeleteAccountVerifyPassword.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<TransactionDto>;
    })
  );
}

wiOnPosAccountDeleteAccountVerifyPassword.PATH = '/api/v1/wionpos-account/verify-password';
