/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryCreateDto } from '../../models/category-create-dto';
import { CategoryDto } from '../../models/category-dto';

export interface CategoryCreate$Params {
      body: CategoryCreateDto
}

export function categoryCreate(http: HttpClient, rootUrl: string, params: CategoryCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CategoryDto>> {
  const rb = new RequestBuilder(rootUrl, categoryCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<CategoryDto>;
    })
  );
}

categoryCreate.PATH = '/api/v1/categories';
