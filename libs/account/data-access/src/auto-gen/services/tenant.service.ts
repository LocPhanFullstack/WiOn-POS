/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { PagedResultDtoOfTenantDto } from '../models/paged-result-dto-of-tenant-dto';
import { tenantCreate } from '../fn/tenant/tenant-create';
import { TenantCreate$Params } from '../fn/tenant/tenant-create';
import { tenantDelete } from '../fn/tenant/tenant-delete';
import { TenantDelete$Params } from '../fn/tenant/tenant-delete';
import { tenantDeleteDefaultConnectionString } from '../fn/tenant/tenant-delete-default-connection-string';
import { TenantDeleteDefaultConnectionString$Params } from '../fn/tenant/tenant-delete-default-connection-string';
import { TenantDto } from '../models/tenant-dto';
import { tenantGet } from '../fn/tenant/tenant-get';
import { TenantGet$Params } from '../fn/tenant/tenant-get';
import { tenantGetDefaultConnectionString } from '../fn/tenant/tenant-get-default-connection-string';
import { TenantGetDefaultConnectionString$Params } from '../fn/tenant/tenant-get-default-connection-string';
import { tenantGetList } from '../fn/tenant/tenant-get-list';
import { TenantGetList$Params } from '../fn/tenant/tenant-get-list';
import { tenantUpdate } from '../fn/tenant/tenant-update';
import { TenantUpdate$Params } from '../fn/tenant/tenant-update';
import { tenantUpdateDefaultConnectionString } from '../fn/tenant/tenant-update-default-connection-string';
import { TenantUpdateDefaultConnectionString$Params } from '../fn/tenant/tenant-update-default-connection-string';

@Injectable({ providedIn: 'root' })
export class TenantService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `tenantGet()` */
  static readonly TenantGetPath = '/api/multi-tenancy/tenants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGet$Response(params: TenantGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TenantDto>> {
    return tenantGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGet(params: TenantGet$Params, context?: HttpContext): Observable<TenantDto> {
    return this.tenantGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<TenantDto>): TenantDto => r.body)
    );
  }

  /** Path part for operation `tenantUpdate()` */
  static readonly TenantUpdatePath = '/api/multi-tenancy/tenants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantUpdate$Response(params: TenantUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TenantDto>> {
    return tenantUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantUpdate(params: TenantUpdate$Params, context?: HttpContext): Observable<TenantDto> {
    return this.tenantUpdate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<TenantDto>): TenantDto => r.body)
    );
  }

  /** Path part for operation `tenantDelete()` */
  static readonly TenantDeletePath = '/api/multi-tenancy/tenants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantDelete$Response(params: TenantDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return tenantDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantDelete(params: TenantDelete$Params, context?: HttpContext): Observable<void> {
    return this.tenantDelete$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `tenantGetList()` */
  static readonly TenantGetListPath = '/api/multi-tenancy/tenants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetList$Response(params?: TenantGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfTenantDto>> {
    return tenantGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetList(params?: TenantGetList$Params, context?: HttpContext): Observable<PagedResultDtoOfTenantDto> {
    return this.tenantGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<PagedResultDtoOfTenantDto>): PagedResultDtoOfTenantDto => r.body)
    );
  }

  /** Path part for operation `tenantCreate()` */
  static readonly TenantCreatePath = '/api/multi-tenancy/tenants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantCreate$Response(params: TenantCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TenantDto>> {
    return tenantCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tenantCreate(params: TenantCreate$Params, context?: HttpContext): Observable<TenantDto> {
    return this.tenantCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<TenantDto>): TenantDto => r.body)
    );
  }

  /** Path part for operation `tenantGetDefaultConnectionString()` */
  static readonly TenantGetDefaultConnectionStringPath = '/api/multi-tenancy/tenants/{id}/default-connection-string';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGetDefaultConnectionString()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetDefaultConnectionString$Response(params: TenantGetDefaultConnectionString$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<string>> {
    return tenantGetDefaultConnectionString(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantGetDefaultConnectionString$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGetDefaultConnectionString(params: TenantGetDefaultConnectionString$Params, context?: HttpContext): Observable<string> {
    return this.tenantGetDefaultConnectionString$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `tenantUpdateDefaultConnectionString()` */
  static readonly TenantUpdateDefaultConnectionStringPath = '/api/multi-tenancy/tenants/{id}/default-connection-string';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantUpdateDefaultConnectionString()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantUpdateDefaultConnectionString$Response(params: TenantUpdateDefaultConnectionString$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return tenantUpdateDefaultConnectionString(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantUpdateDefaultConnectionString$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantUpdateDefaultConnectionString(params: TenantUpdateDefaultConnectionString$Params, context?: HttpContext): Observable<void> {
    return this.tenantUpdateDefaultConnectionString$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `tenantDeleteDefaultConnectionString()` */
  static readonly TenantDeleteDefaultConnectionStringPath = '/api/multi-tenancy/tenants/{id}/default-connection-string';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantDeleteDefaultConnectionString()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantDeleteDefaultConnectionString$Response(params: TenantDeleteDefaultConnectionString$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return tenantDeleteDefaultConnectionString(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tenantDeleteDefaultConnectionString$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantDeleteDefaultConnectionString(params: TenantDeleteDefaultConnectionString$Params, context?: HttpContext): Observable<void> {
    return this.tenantDeleteDefaultConnectionString$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
