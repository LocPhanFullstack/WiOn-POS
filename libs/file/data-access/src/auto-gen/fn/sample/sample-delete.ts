/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SampleDelete$Params {
      body: string
}

export function sampleDelete(http: HttpClient, rootUrl: string, params: SampleDelete$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, sampleDelete.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/json');
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

sampleDelete.PATH = '/api/v1/sample';
