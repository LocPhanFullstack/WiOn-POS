/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { FnbPermissionGrantGroupDto } from '../models/fnb-permission-grant-group-dto';
import { fnbRoleCreateRoleWithPermissions } from '../fn/fnb-role/fnb-role-create-role-with-permissions';
import { FnbRoleCreateRoleWithPermissions$Params } from '../fn/fnb-role/fnb-role-create-role-with-permissions';
import { fnbRoleGet } from '../fn/fnb-role/fnb-role-get';
import { FnbRoleGet$Params } from '../fn/fnb-role/fnb-role-get';
import { fnbRoleGetAllList } from '../fn/fnb-role/fnb-role-get-all-list';
import { FnbRoleGetAllList$Params } from '../fn/fnb-role/fnb-role-get-all-list';
import { fnbRoleGetCurrentRolePermissions } from '../fn/fnb-role/fnb-role-get-current-role-permissions';
import { FnbRoleGetCurrentRolePermissions$Params } from '../fn/fnb-role/fnb-role-get-current-role-permissions';
import { fnbRoleUpdateRole } from '../fn/fnb-role/fnb-role-update-role';
import { FnbRoleUpdateRole$Params } from '../fn/fnb-role/fnb-role-update-role';
import { RoleDto } from '../models/role-dto';

@Injectable({ providedIn: 'root' })
export class FnbRoleService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `fnbRoleCreateRoleWithPermissions()` */
  static readonly FnbRoleCreateRoleWithPermissionsPath = '/api/v1/fnb-roles/with-permissions';

  /**
   * Tạo vai trò cùng danh sách quyền.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbRoleCreateRoleWithPermissions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbRoleCreateRoleWithPermissions$Response(params: FnbRoleCreateRoleWithPermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<RoleDto>> {
    return fnbRoleCreateRoleWithPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo vai trò cùng danh sách quyền.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbRoleCreateRoleWithPermissions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbRoleCreateRoleWithPermissions(params: FnbRoleCreateRoleWithPermissions$Params, context?: HttpContext): Observable<RoleDto> {
    return this.fnbRoleCreateRoleWithPermissions$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `fnbRoleGetAllList()` */
  static readonly FnbRoleGetAllListPath = '/api/v1/fnb-roles/all';

  /**
   * Lấy danh sách vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbRoleGetAllList()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbRoleGetAllList$Response(params?: FnbRoleGetAllList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<RoleDto>>> {
    return fnbRoleGetAllList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbRoleGetAllList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbRoleGetAllList(params?: FnbRoleGetAllList$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.fnbRoleGetAllList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `fnbRoleUpdateRole()` */
  static readonly FnbRoleUpdateRolePath = '/api/v1/fnb-roles/{id}';

  /**
   * Chỉnh sửa vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbRoleUpdateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbRoleUpdateRole$Response(params: FnbRoleUpdateRole$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbRoleUpdateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbRoleUpdateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbRoleUpdateRole(params: FnbRoleUpdateRole$Params, context?: HttpContext): Observable<void> {
    return this.fnbRoleUpdateRole$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbRoleGet()` */
  static readonly FnbRoleGetPath = '/api/v1/fnb-roles/{id}/permissions';

  /**
   * Lấy danh sách quyền của một vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbRoleGet$Response(params: FnbRoleGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>> {
    return fnbRoleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách quyền của một vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbRoleGet(params: FnbRoleGet$Params, context?: HttpContext): Observable<Array<FnbPermissionGrantGroupDto>> {
    return this.fnbRoleGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>): Array<FnbPermissionGrantGroupDto> => r.body)
    );
  }

  /** Path part for operation `fnbRoleGetCurrentRolePermissions()` */
  static readonly FnbRoleGetCurrentRolePermissionsPath = '/api/v1/fnb-roles/current/permissions';

  /**
   * Lấy danh sách quyền của vai trò hiện tại (của người dùng hiện tại trong shop hiện tại).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbRoleGetCurrentRolePermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbRoleGetCurrentRolePermissions$Response(params?: FnbRoleGetCurrentRolePermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>> {
    return fnbRoleGetCurrentRolePermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách quyền của vai trò hiện tại (của người dùng hiện tại trong shop hiện tại).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbRoleGetCurrentRolePermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbRoleGetCurrentRolePermissions(params?: FnbRoleGetCurrentRolePermissions$Params, context?: HttpContext): Observable<Array<FnbPermissionGrantGroupDto>> {
    return this.fnbRoleGetCurrentRolePermissions$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<FnbPermissionGrantGroupDto>>): Array<FnbPermissionGrantGroupDto> => r.body)
    );
  }

}
