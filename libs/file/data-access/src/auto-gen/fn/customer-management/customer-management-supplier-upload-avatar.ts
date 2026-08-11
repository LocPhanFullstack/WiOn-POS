/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierAvatarUploadResultDto } from '../../models/supplier-avatar-upload-result-dto';

export interface CustomerManagementSupplierUploadAvatar$Params {
      body?: {
'File'?: Blob | null;
}
}

export function customerManagementSupplierUploadAvatar(http: HttpClient, rootUrl: string, params?: CustomerManagementSupplierUploadAvatar$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<SupplierAvatarUploadResultDto>> {
  const rb = new RequestBuilder(rootUrl, customerManagementSupplierUploadAvatar.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<SupplierAvatarUploadResultDto>;
    })
  );
}

customerManagementSupplierUploadAvatar.PATH = '/api/v1/customer-management/supplier-upload-avatar';
