/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { fnbPermissionGetAssignable } from '../fn/fnb-permission/fnb-permission-get-assignable';
import { FnbPermissionGetAssignable$Params } from '../fn/fnb-permission/fnb-permission-get-assignable';
import { FnbPermissionGroupDto } from '../models/fnb-permission-group-dto';

@Injectable()
export class FnbPermissionService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `fnbPermissionGetAssignable()` */
  static readonly FnbPermissionGetAssignablePath = '/api/v1/fnb-permissions/assignable';

  /**
   * Lấy danh sách quyền có thể dùng để gán cho vai trò.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbPermissionGetAssignable()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbPermissionGetAssignable$Response(params?: FnbPermissionGetAssignable$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FnbPermissionGroupDto>>> {
    return fnbPermissionGetAssignable(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách quyền có thể dùng để gán cho vai trò.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbPermissionGetAssignable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbPermissionGetAssignable(params?: FnbPermissionGetAssignable$Params, context?: HttpContext): Observable<Array<FnbPermissionGroupDto>> {
    return this.fnbPermissionGetAssignable$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<FnbPermissionGroupDto>>): Array<FnbPermissionGroupDto> => r.body)
    );
  }

}
