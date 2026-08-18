/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { permissionGetAssignable } from '../fn/permission/permission-get-assignable';
import { PermissionGetAssignable$Params } from '../fn/permission/permission-get-assignable';
import { PermissionGroupDto } from '../models/permission-group-dto';

@Injectable()
export class PermissionService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `permissionGetAssignable()` */
  static readonly PermissionGetAssignablePath = '/api/v1/permissions/assignable';

  /**
   * Lấy danh sách quyền có thể dùng để gán cho vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `permissionGetAssignable()` instead.
   *
   * This method doesn't expect any request body.
   */
  permissionGetAssignable$Response(params?: PermissionGetAssignable$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<PermissionGroupDto>>> {
    return permissionGetAssignable(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách quyền có thể dùng để gán cho vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `permissionGetAssignable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  permissionGetAssignable(params?: PermissionGetAssignable$Params, context?: HttpContext): Observable<Array<PermissionGroupDto>> {
    return this.permissionGetAssignable$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<PermissionGroupDto>>): Array<PermissionGroupDto> => r.body)
    );
  }

}
