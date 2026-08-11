/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountUserGetList$Params {
  SearchText?: string | null;
  Sorting?: string | null;
  SkipCount?: number;
  MaxResultCount?: number;
}

export function accountUserGetList(http: HttpClient, rootUrl: string, params?: AccountUserGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUserGetList.PATH, 'get');
  if (params) {
    rb.query('SearchText', params.SearchText, {});
    rb.query('Sorting', params.Sorting, {});
    rb.query('SkipCount', params.SkipCount, {});
    rb.query('MaxResultCount', params.MaxResultCount, {});
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

accountUserGetList.PATH = '/api/v1/account-users';
