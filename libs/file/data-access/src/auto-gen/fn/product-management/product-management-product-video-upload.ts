/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductVideoUploadResultDto } from '../../models/product-video-upload-result-dto';

export interface ProductManagementProductVideoUpload$Params {
      body?: {
'File'?: Blob | null;
'Thumbnail'?: Blob | null;
}
}

export function productManagementProductVideoUpload(http: HttpClient, rootUrl: string, params?: ProductManagementProductVideoUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductVideoUploadResultDto>> {
  const rb = new RequestBuilder(rootUrl, productManagementProductVideoUpload.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<ProductVideoUploadResultDto>;
    })
  );
}

productManagementProductVideoUpload.PATH = '/api/v1/product-management/product-upload-video';
