/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FnbInviteCreateDto } from '../../models/fnb-invite-create-dto';
import { InviteCreateResponseDto } from '../../models/invite-create-response-dto';

export interface FnbShopInvitationSendInvitation$Params {
      body: FnbInviteCreateDto
}

export function fnbShopInvitationSendInvitation(http: HttpClient, rootUrl: string, params: FnbShopInvitationSendInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InviteCreateResponseDto>> {
  const rb = new RequestBuilder(rootUrl, fnbShopInvitationSendInvitation.PATH, 'post');
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

fnbShopInvitationSendInvitation.PATH = '/api/v1/fnb-invitations';
