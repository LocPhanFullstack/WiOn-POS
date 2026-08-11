/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerAvatarUploadResultDto } from '../../models/customer-avatar-upload-result-dto';

export interface CustomerManagementCustomerUploadAvatar$Params {
      body?: {
'File'?: Blob | null;
}
}

export function customerManagementCustomerUploadAvatar(http: HttpClient, rootUrl: string, params?: CustomerManagementCustomerUploadAvatar$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<CustomerAvatarUploadResultDto>> {
  const rb = new RequestBuilder(rootUrl, customerManagementCustomerUploadAvatar.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<CustomerAvatarUploadResultDto>;
    })
  );
}

customerManagementCustomerUploadAvatar.PATH = '/api/v1/customer-management/customer-upload-avatar';
