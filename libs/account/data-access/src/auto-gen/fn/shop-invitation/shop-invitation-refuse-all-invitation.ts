/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InvitationRefusalDto } from '../../models/invitation-refusal-dto';

export interface ShopInvitationRefuseAllInvitation$Params {
      body: InvitationRefusalDto
}

export function shopInvitationRefuseAllInvitation(http: HttpClient, rootUrl: string, params: ShopInvitationRefuseAllInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, shopInvitationRefuseAllInvitation.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

shopInvitationRefuseAllInvitation.PATH = '/api/v1/invitations/refuse-all';
