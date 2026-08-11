/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ShopInvitationAcceptInvitation$Params {
  invitationId: number;
}

export function shopInvitationAcceptInvitation(http: HttpClient, rootUrl: string, params: ShopInvitationAcceptInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shopInvitationAcceptInvitation.PATH, 'put');
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

shopInvitationAcceptInvitation.PATH = '/api/v1/invitations/{invitationId}/accept';
