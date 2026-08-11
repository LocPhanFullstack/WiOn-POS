/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InvitationUrlDto } from '../../models/invitation-url-dto';

export interface ShopInvitationGetInvitationUrl$Params {
}

export function shopInvitationGetInvitationUrl(http: HttpClient, rootUrl: string, params?: ShopInvitationGetInvitationUrl$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InvitationUrlDto>> {
  const rb = new RequestBuilder(rootUrl, shopInvitationGetInvitationUrl.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<InvitationUrlDto>;
    })
  );
}

shopInvitationGetInvitationUrl.PATH = '/api/v1/invitations/url';
