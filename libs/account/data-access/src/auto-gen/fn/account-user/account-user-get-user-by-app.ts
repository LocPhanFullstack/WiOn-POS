/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountUserGetUserByApp$Params {
  SearchText?: string | null;
  Sorting?: string | null;
  SkipCount?: number;
  MaxResultCount?: number;
  tenant?: string | null;
}

export function accountUserGetUserByApp(http: HttpClient, rootUrl: string, params?: AccountUserGetUserByApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserGetUserByApp.PATH, 'get');
  if (params) {
    rb.query('SearchText', params.SearchText, {});
    rb.query('Sorting', params.Sorting, {});
    rb.query('SkipCount', params.SkipCount, {});
    rb.query('MaxResultCount', params.MaxResultCount, {});
    rb.header('tenant', params.tenant, {});
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

accountUserGetUserByApp.PATH = '/api/v1/account-users/get-by-app';
