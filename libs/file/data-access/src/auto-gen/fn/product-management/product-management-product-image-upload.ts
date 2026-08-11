/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductImageUploadResultDto } from '../../models/product-image-upload-result-dto';

export interface ProductManagementProductImageUpload$Params {
      body?: {
'File'?: Blob | null;
}
}

export function productManagementProductImageUpload(http: HttpClient, rootUrl: string, params?: ProductManagementProductImageUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductImageUploadResultDto>> {
  const rb = new RequestBuilder(rootUrl, productManagementProductImageUpload.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<ProductImageUploadResultDto>;
    })
  );
}

productManagementProductImageUpload.PATH = '/api/v1/product-management/product-upload-image';
