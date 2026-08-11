/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { fnbShopUserCancelShopUserInvitation } from '../fn/fnb-shop-user/fnb-shop-user-cancel-shop-user-invitation';
import { FnbShopUserCancelShopUserInvitation$Params } from '../fn/fnb-shop-user/fnb-shop-user-cancel-shop-user-invitation';
import { fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted } from '../fn/fnb-shop-user/fnb-shop-user-check-if-any-shop-user-with-phone-has-existed';
import { FnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params } from '../fn/fnb-shop-user/fnb-shop-user-check-if-any-shop-user-with-phone-has-existed';
import { fnbShopUserDeleteShopUserById } from '../fn/fnb-shop-user/fnb-shop-user-delete-shop-user-by-id';
import { FnbShopUserDeleteShopUserById$Params } from '../fn/fnb-shop-user/fnb-shop-user-delete-shop-user-by-id';
import { fnbShopUserGetCurrentShopUser } from '../fn/fnb-shop-user/fnb-shop-user-get-current-shop-user';
import { FnbShopUserGetCurrentShopUser$Params } from '../fn/fnb-shop-user/fnb-shop-user-get-current-shop-user';
import { fnbShopUserGetList } from '../fn/fnb-shop-user/fnb-shop-user-get-list';
import { FnbShopUserGetList$Params } from '../fn/fnb-shop-user/fnb-shop-user-get-list';
import { fnbShopUserGetShopUser } from '../fn/fnb-shop-user/fnb-shop-user-get-shop-user';
import { FnbShopUserGetShopUser$Params } from '../fn/fnb-shop-user/fnb-shop-user-get-shop-user';
import { fnbShopUserGetShopUserByUserId } from '../fn/fnb-shop-user/fnb-shop-user-get-shop-user-by-user-id';
import { FnbShopUserGetShopUserByUserId$Params } from '../fn/fnb-shop-user/fnb-shop-user-get-shop-user-by-user-id';
import { fnbShopUserLockUser } from '../fn/fnb-shop-user/fnb-shop-user-lock-user';
import { FnbShopUserLockUser$Params } from '../fn/fnb-shop-user/fnb-shop-user-lock-user';
import { fnbShopUserResendShopUserInvitation } from '../fn/fnb-shop-user/fnb-shop-user-resend-shop-user-invitation';
import { FnbShopUserResendShopUserInvitation$Params } from '../fn/fnb-shop-user/fnb-shop-user-resend-shop-user-invitation';
import { fnbShopUserUnlockUser } from '../fn/fnb-shop-user/fnb-shop-user-unlock-user';
import { FnbShopUserUnlockUser$Params } from '../fn/fnb-shop-user/fnb-shop-user-unlock-user';
import { fnbShopUserUpdateShopUserById } from '../fn/fnb-shop-user/fnb-shop-user-update-shop-user-by-id';
import { FnbShopUserUpdateShopUserById$Params } from '../fn/fnb-shop-user/fnb-shop-user-update-shop-user-by-id';
import { ShopUserDto } from '../models/shop-user-dto';
import { ShopUserGetListResponseDto } from '../models/shop-user-get-list-response-dto';
import { ShopUserPhoneCheckResultDto } from '../models/shop-user-phone-check-result-dto';

@Injectable({ providedIn: 'root' })
export class FnbShopUserService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `fnbShopUserGetList()` */
  static readonly FnbShopUserGetListPath = '/api/v1/fnb-shop-users';

  /**
   * Lấy danh sách nhân viên có lọc, tìm kiếm, sắp xếp, phân trang.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetList$Response(params?: FnbShopUserGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserGetListResponseDto>> {
    return fnbShopUserGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách nhân viên có lọc, tìm kiếm, sắp xếp, phân trang.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetList(params?: FnbShopUserGetList$Params, context?: HttpContext): Observable<ShopUserGetListResponseDto> {
    return this.fnbShopUserGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserGetListResponseDto>): ShopUserGetListResponseDto => r.body)
    );
  }

  /** Path part for operation `fnbShopUserGetShopUser()` */
  static readonly FnbShopUserGetShopUserPath = '/api/v1/fnb-shop-users/{shopUserId}';

  /**
   * Lấy thông tin chi tiết của một nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserGetShopUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetShopUser$Response(params: FnbShopUserGetShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
    return fnbShopUserGetShopUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin chi tiết của một nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserGetShopUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetShopUser(params: FnbShopUserGetShopUser$Params, context?: HttpContext): Observable<ShopUserDto> {
    return this.fnbShopUserGetShopUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserDto>): ShopUserDto => r.body)
    );
  }

  /** Path part for operation `fnbShopUserUpdateShopUserById()` */
  static readonly FnbShopUserUpdateShopUserByIdPath = '/api/v1/fnb-shop-users/{shopUserId}';

  /**
   * Chỉnh sửa nhân viên (cập nhật toàn bộ).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserUpdateShopUserById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopUserUpdateShopUserById$Response(params: FnbShopUserUpdateShopUserById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopUserUpdateShopUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa nhân viên (cập nhật toàn bộ).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserUpdateShopUserById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopUserUpdateShopUserById(params: FnbShopUserUpdateShopUserById$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopUserUpdateShopUserById$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopUserDeleteShopUserById()` */
  static readonly FnbShopUserDeleteShopUserByIdPath = '/api/v1/fnb-shop-users/{shopUserId}';

  /**
   * Xóa nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserDeleteShopUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserDeleteShopUserById$Response(params: FnbShopUserDeleteShopUserById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopUserDeleteShopUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserDeleteShopUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserDeleteShopUserById(params: FnbShopUserDeleteShopUserById$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopUserDeleteShopUserById$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopUserGetShopUserByUserId()` */
  static readonly FnbShopUserGetShopUserByUserIdPath = '/api/v1/fnb-shop-users/by-user-id/{accountId}';

  /**
   * Lấy thông tin nhân viên mà một tài khoản đang đóng vai trò trong cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserGetShopUserByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetShopUserByUserId$Response(params: FnbShopUserGetShopUserByUserId$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
    return fnbShopUserGetShopUserByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin nhân viên mà một tài khoản đang đóng vai trò trong cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserGetShopUserByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetShopUserByUserId(params: FnbShopUserGetShopUserByUserId$Params, context?: HttpContext): Observable<ShopUserDto> {
    return this.fnbShopUserGetShopUserByUserId$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserDto>): ShopUserDto => r.body)
    );
  }

  /** Path part for operation `fnbShopUserCancelShopUserInvitation()` */
  static readonly FnbShopUserCancelShopUserInvitationPath = '/api/v1/fnb-shop-users/{shopUserId}/cancel';

  /**
   * Hủy lời mời của 1 nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserCancelShopUserInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserCancelShopUserInvitation$Response(params: FnbShopUserCancelShopUserInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopUserCancelShopUserInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Hủy lời mời của 1 nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserCancelShopUserInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserCancelShopUserInvitation(params: FnbShopUserCancelShopUserInvitation$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopUserCancelShopUserInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopUserResendShopUserInvitation()` */
  static readonly FnbShopUserResendShopUserInvitationPath = '/api/v1/fnb-shop-users/{shopUserId}/invitation';

  /**
   * Gửi lại lời mời cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserResendShopUserInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserResendShopUserInvitation$Response(params: FnbShopUserResendShopUserInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopUserResendShopUserInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi lại lời mời cho nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserResendShopUserInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserResendShopUserInvitation(params: FnbShopUserResendShopUserInvitation$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopUserResendShopUserInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopUserLockUser()` */
  static readonly FnbShopUserLockUserPath = '/api/v1/fnb-shop-users/{shopUserId}/lock';

  /**
   * Khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserLockUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserLockUser$Response(params: FnbShopUserLockUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopUserLockUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserLockUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserLockUser(params: FnbShopUserLockUser$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopUserLockUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopUserUnlockUser()` */
  static readonly FnbShopUserUnlockUserPath = '/api/v1/fnb-shop-users/{shopUserId}/unlock';

  /**
   * Mở khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserUnlockUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserUnlockUser$Response(params: FnbShopUserUnlockUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopUserUnlockUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Mở khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserUnlockUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserUnlockUser(params: FnbShopUserUnlockUser$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopUserUnlockUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopUserGetCurrentShopUser()` */
  static readonly FnbShopUserGetCurrentShopUserPath = '/api/v1/fnb-shop-users/current';

  /**
   * Lấy thông tin nhân viên cửa hàng đang đăng nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserGetCurrentShopUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetCurrentShopUser$Response(params?: FnbShopUserGetCurrentShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
    return fnbShopUserGetCurrentShopUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin nhân viên cửa hàng đang đăng nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserGetCurrentShopUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserGetCurrentShopUser(params?: FnbShopUserGetCurrentShopUser$Params, context?: HttpContext): Observable<ShopUserDto> {
    return this.fnbShopUserGetCurrentShopUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserDto>): ShopUserDto => r.body)
    );
  }

  /** Path part for operation `fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted()` */
  static readonly FnbShopUserCheckIfAnyShopUserWithPhoneHasExistedPath = '/api/v1/fnb-shop-users/check-existed-by-phone';

  /**
   * Kiểm tra liệu có nhân viên nào với số điện thoại đã tồn tại trong cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Response(params?: FnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>> {
    return fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted(this.http, this.rootUrl, params, context);
  }

  /**
   * Kiểm tra liệu có nhân viên nào với số điện thoại đã tồn tại trong cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted(params?: FnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params, context?: HttpContext): Observable<ShopUserPhoneCheckResultDto> {
    return this.fnbShopUserCheckIfAnyShopUserWithPhoneHasExisted$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>): ShopUserPhoneCheckResultDto => r.body)
    );
  }

}
