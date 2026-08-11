/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountUserCheckByPhone$Params {
  phone?: string | null;
}

export function accountUserCheckByPhone(http: HttpClient, rootUrl: string, params?: AccountUserCheckByPhone$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserCheckByPhone.PATH, 'get');
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

accountUserCheckByPhone.PATH = '/api/v1/account-users/check-by-phone';
