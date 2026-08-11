/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SampleGet$Params {
  input?: string | null;
}

export function sampleGet(http: HttpClient, rootUrl: string, params?: SampleGet$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, sampleGet.PATH, 'get');
  if (params) {
    rb.query('input', params.input, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as FNBFileStrictHttpResponse<void>;
    })
  );
}

sampleGet.PATH = '/api/v1/sample';
