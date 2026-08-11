/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountUserFindByPhoneNumber$Params {
  phone?: string | null;
}

export function accountUserFindByPhoneNumber(http: HttpClient, rootUrl: string, params?: AccountUserFindByPhoneNumber$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserFindByPhoneNumber.PATH, 'get');
  if (params) {
    rb.query('phone', params.phone, {});
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

accountUserFindByPhoneNumber.PATH = '/api/v1/account-users/find-by-phone';
