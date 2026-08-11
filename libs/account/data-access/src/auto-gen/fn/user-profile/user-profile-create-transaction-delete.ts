/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateTransactionDeleteDto } from '../../models/create-transaction-delete-dto';
import { CreateTransactionDeleteResultDto } from '../../models/create-transaction-delete-result-dto';

export interface UserProfileCreateTransactionDelete$Params {
      body: CreateTransactionDeleteDto
}

export function userProfileCreateTransactionDelete(http: HttpClient, rootUrl: string, params: UserProfileCreateTransactionDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CreateTransactionDeleteResultDto>> {
  const rb = new RequestBuilder(rootUrl, userProfileCreateTransactionDelete.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<CreateTransactionDeleteResultDto>;
    })
  );
}

userProfileCreateTransactionDelete.PATH = '/api/v1/user-profile/delete-transaction';
