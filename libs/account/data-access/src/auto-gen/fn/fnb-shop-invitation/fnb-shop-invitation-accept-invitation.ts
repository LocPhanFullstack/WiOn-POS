/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface FnbShopInvitationAcceptInvitation$Params {
  invitationId: number;
}

export function fnbShopInvitationAcceptInvitation(http: HttpClient, rootUrl: string, params: FnbShopInvitationAcceptInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, fnbShopInvitationAcceptInvitation.PATH, 'put');
  if (params) {
    rb.path('invitationId', params.invitationId, {});
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

fnbShopInvitationAcceptInvitation.PATH = '/api/v1/fnb-invitations/{invitationId}/accept';
