/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InviteCreateDto } from '../../models/invite-create-dto';
import { InviteCreateResponseDto } from '../../models/invite-create-response-dto';

export interface ShopInvitationSendInvitation$Params {
      body: InviteCreateDto
}

export function shopInvitationSendInvitation(http: HttpClient, rootUrl: string, params: ShopInvitationSendInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InviteCreateResponseDto>> {
  const rb = new RequestBuilder(rootUrl, shopInvitationSendInvitation.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<InviteCreateResponseDto>;
    })
  );
}

shopInvitationSendInvitation.PATH = '/api/v1/invitations';
