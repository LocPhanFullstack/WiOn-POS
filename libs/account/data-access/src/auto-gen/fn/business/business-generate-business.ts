/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface BusinessGenerateBusiness$Params {
}

export function businessGenerateBusiness(http: HttpClient, rootUrl: string, params?: BusinessGenerateBusiness$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<number>>> {
  const rb = new RequestBuilder(rootUrl, businessGenerateBusiness.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<number>>;
    })
  );
}

businessGenerateBusiness.PATH = '/api/v1/businesses/generate';
