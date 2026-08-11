/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MediaAvatarUpload$Params {
      body?: {
'File'?: Blob | null;
}
}

export function mediaAvatarUpload(http: HttpClient, rootUrl: string, params?: MediaAvatarUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, mediaAvatarUpload.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<string>;
    })
  );
}

mediaAvatarUpload.PATH = '/api/v1/media/avatar';
