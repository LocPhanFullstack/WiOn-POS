/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { GetPermissionListResultDto } from '../models/get-permission-list-result-dto';
import { permissionsGet } from '../fn/permissions/permissions-get';
import { PermissionsGet$Params } from '../fn/permissions/permissions-get';
import { permissionsUpdate } from '../fn/permissions/permissions-update';
import { PermissionsUpdate$Params } from '../fn/permissions/permissions-update';

@Injectable()
export class PermissionsService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `permissionsGet()` */
  static readonly PermissionsGetPath = '/api/permission-management/permissions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `permissionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  permissionsGet$Response(params?: PermissionsGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<GetPermissionListResultDto>> {
    return permissionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `permissionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  permissionsGet(params?: PermissionsGet$Params, context?: HttpContext): Observable<GetPermissionListResultDto> {
    return this.permissionsGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<GetPermissionListResultDto>): GetPermissionListResultDto => r.body)
    );
  }

  /** Path part for operation `permissionsUpdate()` */
  static readonly PermissionsUpdatePath = '/api/permission-management/permissions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `permissionsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  permissionsUpdate$Response(params: PermissionsUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return permissionsUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `permissionsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  permissionsUpdate(params: PermissionsUpdate$Params, context?: HttpContext): Observable<void> {
    return this.permissionsUpdate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
