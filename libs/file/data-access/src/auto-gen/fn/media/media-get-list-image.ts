/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ImageDto } from '../../models/image-dto';

export interface MediaGetListImage$Params {
}

export function mediaGetListImage(http: HttpClient, rootUrl: string, params?: MediaGetListImage$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<Array<ImageDto>>> {
  const rb = new RequestBuilder(rootUrl, mediaGetListImage.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<Array<ImageDto>>;
    })
  );
}

mediaGetListImage.PATH = '/api/v1/media/images';
