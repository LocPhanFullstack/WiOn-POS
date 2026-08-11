/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BusinessCreateDto } from '../../models/business-create-dto';
import { BusinessIdDto } from '../../models/business-id-dto';

export interface BusinessCreate$Params {
      body: BusinessCreateDto
}

export function businessCreate(http: HttpClient, rootUrl: string, params: BusinessCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<BusinessIdDto>> {
  const rb = new RequestBuilder(rootUrl, businessCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<BusinessIdDto>;
    })
  );
}

businessCreate.PATH = '/api/v1/businesses';
