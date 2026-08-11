/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MediaGetVideo$Params {

/**
 * MediaId của video
 */
  mediaId: number;
}

export function mediaGetVideo(http: HttpClient, rootUrl: string, params: MediaGetVideo$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, mediaGetVideo.PATH, 'post');
  if (params) {
    rb.path('mediaId', params.mediaId, {});
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

mediaGetVideo.PATH = '/api/v1/media/get-video-stream/{mediaId}';
