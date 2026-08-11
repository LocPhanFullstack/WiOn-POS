/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductImageDefaultUploadResultDto } from '../../models/product-image-default-upload-result-dto';

export interface ProductManagementProductImageDefaultUpload$Params {
      body?: {
'File'?: Blob | null;
'Category'?: string | null;
}
}

export function productManagementProductImageDefaultUpload(http: HttpClient, rootUrl: string, params?: ProductManagementProductImageDefaultUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductImageDefaultUploadResultDto>> {
  const rb = new RequestBuilder(rootUrl, productManagementProductImageDefaultUpload.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<ProductImageDefaultUploadResultDto>;
    })
  );
}

productManagementProductImageDefaultUpload.PATH = '/api/v1/product-management/product-upload-image-default';
