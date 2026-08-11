/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductVideoDefaultUploadResultDto } from '../../models/product-video-default-upload-result-dto';

export interface ProductManagementProductVideoDefaultUpload$Params {
      body?: {
'File'?: Blob | null;
'Thumbnail'?: Blob | null;
'Category'?: string | null;
}
}

export function productManagementProductVideoDefaultUpload(http: HttpClient, rootUrl: string, params?: ProductManagementProductVideoDefaultUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductVideoDefaultUploadResultDto>> {
  const rb = new RequestBuilder(rootUrl, productManagementProductVideoDefaultUpload.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<ProductVideoDefaultUploadResultDto>;
    })
  );
}

productManagementProductVideoDefaultUpload.PATH = '/api/v1/product-management/product-upload-video-default';
