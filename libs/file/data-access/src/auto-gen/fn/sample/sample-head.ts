/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SampleHead$Params {
  input?: string | null;
}

export function sampleHead(http: HttpClient, rootUrl: string, params?: SampleHead$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, sampleHead.PATH, 'head');
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

sampleHead.PATH = '/api/v1/sample';
