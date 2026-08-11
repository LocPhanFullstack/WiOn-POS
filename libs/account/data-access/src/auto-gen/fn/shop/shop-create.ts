/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ShopCreateDto } from '../../models/shop-create-dto';
import { ShopIdDto } from '../../models/shop-id-dto';

export interface ShopCreate$Params {
      body: ShopCreateDto
}

export function shopCreate(http: HttpClient, rootUrl: string, params: ShopCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopIdDto>> {
  const rb = new RequestBuilder(rootUrl, shopCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<ShopIdDto>;
    })
  );
}

shopCreate.PATH = '/api/v1/shops';
