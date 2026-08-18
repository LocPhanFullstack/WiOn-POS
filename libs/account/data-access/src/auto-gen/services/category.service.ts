/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { categoryCreate } from '../fn/category/category-create';
import { CategoryCreate$Params } from '../fn/category/category-create';
import { CategoryDto } from '../models/category-dto';
import { categoryGetList } from '../fn/category/category-get-list';
import { CategoryGetList$Params } from '../fn/category/category-get-list';

@Injectable()
export class CategoryService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `categoryGetList()` */
  static readonly CategoryGetListPath = '/api/v1/categories';

  /**
   * Lấy danh sách ngành hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGetList$Response(params?: CategoryGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<CategoryDto>>> {
    return categoryGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách ngành hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryGetList(params?: CategoryGetList$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.categoryGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `categoryCreate()` */
  static readonly CategoryCreatePath = '/api/v1/categories';

  /**
   * Tạo ngành hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryCreate$Response(params: CategoryCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CategoryDto>> {
    return categoryCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo ngành hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryCreate(params: CategoryCreate$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.categoryCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

}
