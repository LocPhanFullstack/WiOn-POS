/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUserGetListResponseDto } from '../../models/shop-user-get-list-response-dto';
import { ShopUserSortType } from '../../models/shop-user-sort-type';
import { ShopUserStatus } from '../../models/shop-user-status';

export interface ShopUserGetList$Params {

/**
 * Lọc theo trạng thái nhân viên
 */
  Status?: ShopUserStatus | null;

/**
 * Tìm kiếm theo tên, điện thoại, email
 */
  SearchText?: string | null;

/**
 * Sắp xếp theo
 * - 1: Ngày cập nhật gần nhất
 * - 2: Tên nhân viên
 * - 3: Trạng thái nhân viên
 */
  SortType?: ShopUserSortType;
  SkipCount?: number;
  MaxResultCount?: number;
}

export function shopUserGetList(http: HttpClient, rootUrl: string, params?: ShopUserGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserGetListResponseDto>> {
  const rb = new RequestBuilder(rootUrl, shopUserGetList.PATH, 'get');
  if (params) {
    rb.query('Status', params.Status, {});
    rb.query('SearchText', params.SearchText, {});
    rb.query('SortType', params.SortType, {});
    rb.query('SkipCount', params.SkipCount, {});
    rb.query('MaxResultCount', params.MaxResultCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ShopUserGetListResponseDto>;
    })
  );
}

shopUserGetList.PATH = '/api/v1/shop-users';
