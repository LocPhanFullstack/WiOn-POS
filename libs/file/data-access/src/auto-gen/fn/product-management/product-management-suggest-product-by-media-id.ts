/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SuggestProductNameDto } from '../../models/suggest-product-name-dto';
import { SuggestProductNameResultDto } from '../../models/suggest-product-name-result-dto';

export interface ProductManagementSuggestProductByMediaId$Params {
      body: SuggestProductNameDto
}

export function productManagementSuggestProductByMediaId(http: HttpClient, rootUrl: string, params: ProductManagementSuggestProductByMediaId$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<SuggestProductNameResultDto>> {
  const rb = new RequestBuilder(rootUrl, productManagementSuggestProductByMediaId.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<SuggestProductNameResultDto>;
    })
  );
}

productManagementSuggestProductByMediaId.PATH = '/api/v1/product-management/suggest-by-mediaId';
