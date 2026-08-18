/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { PermissionGrantGroupDto } from '../models/permission-grant-group-dto';
import { roleCreateRoleWithPermissions } from '../fn/role/role-create-role-with-permissions';
import { RoleCreateRoleWithPermissions$Params } from '../fn/role/role-create-role-with-permissions';
import { RoleDto } from '../models/role-dto';
import { roleGet } from '../fn/role/role-get';
import { RoleGet$Params } from '../fn/role/role-get';
import { roleGetAllList } from '../fn/role/role-get-all-list';
import { RoleGetAllList$Params } from '../fn/role/role-get-all-list';
import { roleGetCurrentRolePermissions } from '../fn/role/role-get-current-role-permissions';
import { RoleGetCurrentRolePermissions$Params } from '../fn/role/role-get-current-role-permissions';
import { roleUpdateRole } from '../fn/role/role-update-role';
import { RoleUpdateRole$Params } from '../fn/role/role-update-role';

@Injectable()
export class RoleService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `roleCreateRoleWithPermissions()` */
  static readonly RoleCreateRoleWithPermissionsPath = '/api/v1/roles/with-permissions';

  /**
   * Tạo vai trò cùng danh sách quyền.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleCreateRoleWithPermissions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleCreateRoleWithPermissions$Response(params: RoleCreateRoleWithPermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<RoleDto>> {
    return roleCreateRoleWithPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo vai trò cùng danh sách quyền.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleCreateRoleWithPermissions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleCreateRoleWithPermissions(params: RoleCreateRoleWithPermissions$Params, context?: HttpContext): Observable<RoleDto> {
    return this.roleCreateRoleWithPermissions$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `roleGetAllList()` */
  static readonly RoleGetAllListPath = '/api/v1/roles/all';

  /**
   * Lấy danh sách vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleGetAllList()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleGetAllList$Response(params?: RoleGetAllList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<RoleDto>>> {
    return roleGetAllList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleGetAllList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleGetAllList(params?: RoleGetAllList$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.roleGetAllList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `roleUpdateRole()` */
  static readonly RoleUpdateRolePath = '/api/v1/roles/{id}';

  /**
   * Chỉnh sửa vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleUpdateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleUpdateRole$Response(params: RoleUpdateRole$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return roleUpdateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleUpdateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleUpdateRole(params: RoleUpdateRole$Params, context?: HttpContext): Observable<void> {
    return this.roleUpdateRole$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `roleGet()` */
  static readonly RoleGetPath = '/api/v1/roles/{id}/permissions';

  /**
   * Lấy danh sách quyền của một vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleGet$Response(params: RoleGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>> {
    return roleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách quyền của một vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleGet(params: RoleGet$Params, context?: HttpContext): Observable<Array<PermissionGrantGroupDto>> {
    return this.roleGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>): Array<PermissionGrantGroupDto> => r.body)
    );
  }

  /** Path part for operation `roleGetCurrentRolePermissions()` */
  static readonly RoleGetCurrentRolePermissionsPath = '/api/v1/roles/current/permissions';

  /**
   * Lấy danh sách quyền của vai trò hiện tại (của người dùng hiện tại trong shop hiện tại).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleGetCurrentRolePermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleGetCurrentRolePermissions$Response(params?: RoleGetCurrentRolePermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>> {
    return roleGetCurrentRolePermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách quyền của vai trò hiện tại (của người dùng hiện tại trong shop hiện tại).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleGetCurrentRolePermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleGetCurrentRolePermissions(params?: RoleGetCurrentRolePermissions$Params, context?: HttpContext): Observable<Array<PermissionGrantGroupDto>> {
    return this.roleGetCurrentRolePermissions$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<PermissionGrantGroupDto>>): Array<PermissionGrantGroupDto> => r.body)
    );
  }

}
