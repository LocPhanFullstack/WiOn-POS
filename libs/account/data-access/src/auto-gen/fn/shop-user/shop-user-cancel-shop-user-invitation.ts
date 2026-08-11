/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ShopUserCancelShopUserInvitation$Params {

/**
 * Id nhân viên
 */
  shopUserId: number;
}

export function shopUserCancelShopUserInvitation(http: HttpClient, rootUrl: string, params: ShopUserCancelShopUserInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shopUserCancelShopUserInvitation.PATH, 'put');
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

shopUserCancelShopUserInvitation.PATH = '/api/v1/shop-users/{shopUserId}/cancel';
