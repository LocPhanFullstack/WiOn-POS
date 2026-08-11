/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BusinessAvatarUpdateDto } from '../../models/business-avatar-update-dto';

export interface BusinessUpdateAvatar$Params {

/**
 * ID doanh nghiệp
 */
  id: number;
      body: BusinessAvatarUpdateDto
}

export function businessUpdateAvatar(http: HttpClient, rootUrl: string, params: BusinessUpdateAvatar$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, businessUpdateAvatar.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

businessUpdateAvatar.PATH = '/api/v1/businesses/{id}/avatar';
