/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBFileBaseService } from '../fnb-file-base-service';
import { FNBFileApiConfiguration, FNBFileApiConfigurationToken } from '../fnb-file-api-configuration';
import { FNBFileStrictHttpResponse } from '../fnb-file-strict-http-response';

import { CustomerAvatarUploadResultDto } from '../models/customer-avatar-upload-result-dto';
import { customerManagementCustomerUploadAvatar } from '../fn/customer-management/customer-management-customer-upload-avatar';
import { CustomerManagementCustomerUploadAvatar$Params } from '../fn/customer-management/customer-management-customer-upload-avatar';
import { customerManagementSupplierUploadAvatar } from '../fn/customer-management/customer-management-supplier-upload-avatar';
import { CustomerManagementSupplierUploadAvatar$Params } from '../fn/customer-management/customer-management-supplier-upload-avatar';
import { SupplierAvatarUploadResultDto } from '../models/supplier-avatar-upload-result-dto';

@Injectable({ providedIn: 'root' })
export class CustomerManagementService extends FNBFileBaseService {
  override config: FNBFileApiConfiguration = inject(FNBFileApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `customerManagementCustomerUploadAvatar()` */
  static readonly CustomerManagementCustomerUploadAvatarPath = '/api/v1/customer-management/customer-upload-avatar';

  /**
   * upload avatar cho customer.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerManagementCustomerUploadAvatar()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customerManagementCustomerUploadAvatar$Response(params?: CustomerManagementCustomerUploadAvatar$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<CustomerAvatarUploadResultDto>> {
    return customerManagementCustomerUploadAvatar(this.http, this.rootUrl, params, context);
  }

  /**
   * upload avatar cho customer.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerManagementCustomerUploadAvatar$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customerManagementCustomerUploadAvatar(params?: CustomerManagementCustomerUploadAvatar$Params, context?: HttpContext): Observable<CustomerAvatarUploadResultDto> {
    return this.customerManagementCustomerUploadAvatar$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<CustomerAvatarUploadResultDto>): CustomerAvatarUploadResultDto => r.body)
    );
  }

  /** Path part for operation `customerManagementSupplierUploadAvatar()` */
  static readonly CustomerManagementSupplierUploadAvatarPath = '/api/v1/customer-management/supplier-upload-avatar';

  /**
   * upload avatar cho nhà cung cấp.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerManagementSupplierUploadAvatar()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customerManagementSupplierUploadAvatar$Response(params?: CustomerManagementSupplierUploadAvatar$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<SupplierAvatarUploadResultDto>> {
    return customerManagementSupplierUploadAvatar(this.http, this.rootUrl, params, context);
  }

  /**
   * upload avatar cho nhà cung cấp.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerManagementSupplierUploadAvatar$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customerManagementSupplierUploadAvatar(params?: CustomerManagementSupplierUploadAvatar$Params, context?: HttpContext): Observable<SupplierAvatarUploadResultDto> {
    return this.customerManagementSupplierUploadAvatar$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<SupplierAvatarUploadResultDto>): SupplierAvatarUploadResultDto => r.body)
    );
  }

}
