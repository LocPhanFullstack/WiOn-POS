/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopUsersByPermissionsDto } from '../../models/shop-users-by-permissions-dto';

export interface ShopUserGetShopUsersHavingEveryPermissionsOfList$Params {
  permissionNames?: Array<string> | null;
}

export function shopUserGetShopUsersHavingEveryPermissionsOfList(http: HttpClient, rootUrl: string, params?: ShopUserGetShopUsersHavingEveryPermissionsOfList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUsersByPermissionsDto>> {
  const rb = new RequestBuilder(rootUrl, shopUserGetShopUsersHavingEveryPermissionsOfList.PATH, 'get');
  if (params) {
    rb.query('permissionNames', params.permissionNames, {"style":"form","explode":true});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ShopUsersByPermissionsDto>;
    })
  );
}

shopUserGetShopUsersHavingEveryPermissionsOfList.PATH = '/api/v1/shop-users/having-every-permissions';
