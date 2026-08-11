/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface FnbShopUserUnlockUser$Params {

/**
 * Id nhân viên
 */
  shopUserId: number;
}

export function fnbShopUserUnlockUser(http: HttpClient, rootUrl: string, params: FnbShopUserUnlockUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, fnbShopUserUnlockUser.PATH, 'put');
  if (params) {
    rb.path('shopUserId', params.shopUserId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as FNBAccountStrictHttpResponse<void>;
    })
  );
}

fnbShopUserUnlockUser.PATH = '/api/v1/fnb-shop-users/{shopUserId}/unlock';
