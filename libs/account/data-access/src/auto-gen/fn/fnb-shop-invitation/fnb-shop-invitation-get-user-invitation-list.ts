/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BusinessInvitationDto } from '../../models/business-invitation-dto';

export interface FnbShopInvitationGetUserInvitationList$Params {
}

export function fnbShopInvitationGetUserInvitationList(http: HttpClient, rootUrl: string, params?: FnbShopInvitationGetUserInvitationList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<BusinessInvitationDto>>> {
  const rb = new RequestBuilder(rootUrl, fnbShopInvitationGetUserInvitationList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<BusinessInvitationDto>>;
    })
  );
}

fnbShopInvitationGetUserInvitationList.PATH = '/api/v1/fnb-invitations';
