/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { roleManagerGetRoles } from '../fn/role-manager/role-manager-get-roles';
import { RoleManagerGetRoles$Params } from '../fn/role-manager/role-manager-get-roles';
import { roleManagerUserCreate } from '../fn/role-manager/role-manager-user-create';
import { RoleManagerUserCreate$Params } from '../fn/role-manager/role-manager-user-create';
import { roleManagerUserDelete } from '../fn/role-manager/role-manager-user-delete';
import { RoleManagerUserDelete$Params } from '../fn/role-manager/role-manager-user-delete';

@Injectable({ providedIn: 'root' })
export class RoleManagerService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `roleManagerUserCreate()` */
  static readonly RoleManagerUserCreatePath = '/api/v1/roles/create';

  /**
   * tạo 1 role cho user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleManagerUserCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleManagerUserCreate$Response(params: RoleManagerUserCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return roleManagerUserCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * tạo 1 role cho user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleManagerUserCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleManagerUserCreate(params: RoleManagerUserCreate$Params, context?: HttpContext): Observable<Blob> {
    return this.roleManagerUserCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `roleManagerUserDelete()` */
  static readonly RoleManagerUserDeletePath = '/api/v1/roles/delete';

  /**
   * xóa role cho 1 user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleManagerUserDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleManagerUserDelete$Response(params: RoleManagerUserDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return roleManagerUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * xóa role cho 1 user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleManagerUserDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roleManagerUserDelete(params: RoleManagerUserDelete$Params, context?: HttpContext): Observable<Blob> {
    return this.roleManagerUserDelete$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `roleManagerGetRoles()` */
  static readonly RoleManagerGetRolesPath = '/api/v1/roles/get-roles';

  /**
   * lấy danh sách role của app.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roleManagerGetRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleManagerGetRoles$Response(params?: RoleManagerGetRoles$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return roleManagerGetRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * lấy danh sách role của app.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `roleManagerGetRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roleManagerGetRoles(params?: RoleManagerGetRoles$Params, context?: HttpContext): Observable<Blob> {
    return this.roleManagerGetRoles$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
