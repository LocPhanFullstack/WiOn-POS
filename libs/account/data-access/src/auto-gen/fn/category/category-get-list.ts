/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryDto } from '../../models/category-dto';

export interface CategoryGetList$Params {

/**
 * Từ khóa tìm kiếm
 */
  SearchText?: string | null;
}

export function categoryGetList(http: HttpClient, rootUrl: string, params?: CategoryGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<CategoryDto>>> {
  const rb = new RequestBuilder(rootUrl, categoryGetList.PATH, 'get');
  if (params) {
    rb.query('SearchText', params.SearchText, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<CategoryDto>>;
    })
  );
}

categoryGetList.PATH = '/api/v1/categories';
