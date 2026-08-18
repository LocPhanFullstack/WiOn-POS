/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { shopUserCancelShopUserInvitation } from '../fn/shop-user/shop-user-cancel-shop-user-invitation';
import { ShopUserCancelShopUserInvitation$Params } from '../fn/shop-user/shop-user-cancel-shop-user-invitation';
import { shopUserCheckIfAnyShopUserWithPhoneHasExisted } from '../fn/shop-user/shop-user-check-if-any-shop-user-with-phone-has-existed';
import { ShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params } from '../fn/shop-user/shop-user-check-if-any-shop-user-with-phone-has-existed';
import { ShopUserDto } from '../models/shop-user-dto';
import { shopUserGetCurrentShopUser } from '../fn/shop-user/shop-user-get-current-shop-user';
import { ShopUserGetCurrentShopUser$Params } from '../fn/shop-user/shop-user-get-current-shop-user';
import { shopUserGetList } from '../fn/shop-user/shop-user-get-list';
import { ShopUserGetList$Params } from '../fn/shop-user/shop-user-get-list';
import { ShopUserGetListResponseDto } from '../models/shop-user-get-list-response-dto';
import { shopUserGetShopUser } from '../fn/shop-user/shop-user-get-shop-user';
import { ShopUserGetShopUser$Params } from '../fn/shop-user/shop-user-get-shop-user';
import { shopUserGetShopUserByUserId } from '../fn/shop-user/shop-user-get-shop-user-by-user-id';
import { ShopUserGetShopUserByUserId$Params } from '../fn/shop-user/shop-user-get-shop-user-by-user-id';
import { shopUserGetShopUsersHavingEveryPermissionsOfList } from '../fn/shop-user/shop-user-get-shop-users-having-every-permissions-of-list';
import { ShopUserGetShopUsersHavingEveryPermissionsOfList$Params } from '../fn/shop-user/shop-user-get-shop-users-having-every-permissions-of-list';
import { shopUserGetShopUsersHavingSomePermissionsOfList } from '../fn/shop-user/shop-user-get-shop-users-having-some-permissions-of-list';
import { ShopUserGetShopUsersHavingSomePermissionsOfList$Params } from '../fn/shop-user/shop-user-get-shop-users-having-some-permissions-of-list';
import { shopUserLockUser } from '../fn/shop-user/shop-user-lock-user';
import { ShopUserLockUser$Params } from '../fn/shop-user/shop-user-lock-user';
import { shopUserPartialUpdateShopUserById } from '../fn/shop-user/shop-user-partial-update-shop-user-by-id';
import { ShopUserPartialUpdateShopUserById$Params } from '../fn/shop-user/shop-user-partial-update-shop-user-by-id';
import { ShopUserPhoneCheckResultDto } from '../models/shop-user-phone-check-result-dto';
import { shopUserResendShopUserInvitation } from '../fn/shop-user/shop-user-resend-shop-user-invitation';
import { ShopUserResendShopUserInvitation$Params } from '../fn/shop-user/shop-user-resend-shop-user-invitation';
import { ShopUsersByPermissionsDto } from '../models/shop-users-by-permissions-dto';
import { shopUserUnlockUser } from '../fn/shop-user/shop-user-unlock-user';
import { ShopUserUnlockUser$Params } from '../fn/shop-user/shop-user-unlock-user';
import { shopUserUpdateShopUserById } from '../fn/shop-user/shop-user-update-shop-user-by-id';
import { ShopUserUpdateShopUserById$Params } from '../fn/shop-user/shop-user-update-shop-user-by-id';

@Injectable()
export class ShopUserService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `shopUserGetList()` */
  static readonly ShopUserGetListPath = '/api/v1/shop-users';

  /**
   * Lấy danh sách nhân viên có lọc, tìm kiếm, sắp xếp, phân trang.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetList$Response(params?: ShopUserGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserGetListResponseDto>> {
    return shopUserGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách nhân viên có lọc, tìm kiếm, sắp xếp, phân trang.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetList(params?: ShopUserGetList$Params, context?: HttpContext): Observable<ShopUserGetListResponseDto> {
    return this.shopUserGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserGetListResponseDto>): ShopUserGetListResponseDto => r.body)
    );
  }

  /** Path part for operation `shopUserGetShopUsersHavingEveryPermissionsOfList()` */
  static readonly ShopUserGetShopUsersHavingEveryPermissionsOfListPath = '/api/v1/shop-users/having-every-permissions';

  /**
   * Lấy tất cả nhân viên đang làm việc mà có mọi quyền trong danh sách.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserGetShopUsersHavingEveryPermissionsOfList()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUsersHavingEveryPermissionsOfList$Response(params?: ShopUserGetShopUsersHavingEveryPermissionsOfList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUsersByPermissionsDto>> {
    return shopUserGetShopUsersHavingEveryPermissionsOfList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy tất cả nhân viên đang làm việc mà có mọi quyền trong danh sách.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserGetShopUsersHavingEveryPermissionsOfList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUsersHavingEveryPermissionsOfList(params?: ShopUserGetShopUsersHavingEveryPermissionsOfList$Params, context?: HttpContext): Observable<ShopUsersByPermissionsDto> {
    return this.shopUserGetShopUsersHavingEveryPermissionsOfList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUsersByPermissionsDto>): ShopUsersByPermissionsDto => r.body)
    );
  }

  /** Path part for operation `shopUserGetShopUsersHavingSomePermissionsOfList()` */
  static readonly ShopUserGetShopUsersHavingSomePermissionsOfListPath = '/api/v1/shop-users/having-some-permissions';

  /**
   * Lấy tất cả nhân viên đang làm việc mà có ít nhất một quyền trong danh sách.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserGetShopUsersHavingSomePermissionsOfList()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUsersHavingSomePermissionsOfList$Response(params?: ShopUserGetShopUsersHavingSomePermissionsOfList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUsersByPermissionsDto>> {
    return shopUserGetShopUsersHavingSomePermissionsOfList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy tất cả nhân viên đang làm việc mà có ít nhất một quyền trong danh sách.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserGetShopUsersHavingSomePermissionsOfList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUsersHavingSomePermissionsOfList(params?: ShopUserGetShopUsersHavingSomePermissionsOfList$Params, context?: HttpContext): Observable<ShopUsersByPermissionsDto> {
    return this.shopUserGetShopUsersHavingSomePermissionsOfList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUsersByPermissionsDto>): ShopUsersByPermissionsDto => r.body)
    );
  }

  /** Path part for operation `shopUserGetShopUser()` */
  static readonly ShopUserGetShopUserPath = '/api/v1/shop-users/{shopUserId}';

  /**
   * Lấy thông tin chi tiết của một nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserGetShopUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUser$Response(params: ShopUserGetShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
    return shopUserGetShopUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin chi tiết của một nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserGetShopUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUser(params: ShopUserGetShopUser$Params, context?: HttpContext): Observable<ShopUserDto> {
    return this.shopUserGetShopUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserDto>): ShopUserDto => r.body)
    );
  }

  /** Path part for operation `shopUserUpdateShopUserById()` */
  static readonly ShopUserUpdateShopUserByIdPath = '/api/v1/shop-users/{shopUserId}';

  /**
   * Chỉnh sửa nhân viên (cập nhật toàn bộ).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserUpdateShopUserById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopUserUpdateShopUserById$Response(params: ShopUserUpdateShopUserById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUserUpdateShopUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa nhân viên (cập nhật toàn bộ).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserUpdateShopUserById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopUserUpdateShopUserById(params: ShopUserUpdateShopUserById$Params, context?: HttpContext): Observable<void> {
    return this.shopUserUpdateShopUserById$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopUserPartialUpdateShopUserById()` */
  static readonly ShopUserPartialUpdateShopUserByIdPath = '/api/v1/shop-users/{shopUserId}';

  /**
   * Chỉnh sửa nhân viên (cập nhật một phần).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserPartialUpdateShopUserById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopUserPartialUpdateShopUserById$Response(params: ShopUserPartialUpdateShopUserById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUserPartialUpdateShopUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa nhân viên (cập nhật một phần).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserPartialUpdateShopUserById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopUserPartialUpdateShopUserById(params: ShopUserPartialUpdateShopUserById$Params, context?: HttpContext): Observable<void> {
    return this.shopUserPartialUpdateShopUserById$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopUserGetShopUserByUserId()` */
  static readonly ShopUserGetShopUserByUserIdPath = '/api/v1/shop-users/by-user-id/{accountId}';

  /**
   * Lấy thông tin nhân viên mà một tài khoản đang đóng vai trò trong cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserGetShopUserByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUserByUserId$Response(params: ShopUserGetShopUserByUserId$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
    return shopUserGetShopUserByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin nhân viên mà một tài khoản đang đóng vai trò trong cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserGetShopUserByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetShopUserByUserId(params: ShopUserGetShopUserByUserId$Params, context?: HttpContext): Observable<ShopUserDto> {
    return this.shopUserGetShopUserByUserId$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserDto>): ShopUserDto => r.body)
    );
  }

  /** Path part for operation `shopUserCancelShopUserInvitation()` */
  static readonly ShopUserCancelShopUserInvitationPath = '/api/v1/shop-users/{shopUserId}/cancel';

  /**
   * Hủy lời mời của 1 nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserCancelShopUserInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserCancelShopUserInvitation$Response(params: ShopUserCancelShopUserInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUserCancelShopUserInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Hủy lời mời của 1 nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserCancelShopUserInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserCancelShopUserInvitation(params: ShopUserCancelShopUserInvitation$Params, context?: HttpContext): Observable<void> {
    return this.shopUserCancelShopUserInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopUserResendShopUserInvitation()` */
  static readonly ShopUserResendShopUserInvitationPath = '/api/v1/shop-users/{shopUserId}/invitation';

  /**
   * Gửi lại lời mời cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserResendShopUserInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserResendShopUserInvitation$Response(params: ShopUserResendShopUserInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUserResendShopUserInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi lại lời mời cho nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserResendShopUserInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserResendShopUserInvitation(params: ShopUserResendShopUserInvitation$Params, context?: HttpContext): Observable<void> {
    return this.shopUserResendShopUserInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopUserLockUser()` */
  static readonly ShopUserLockUserPath = '/api/v1/shop-users/{shopUserId}/lock';

  /**
   * Khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserLockUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserLockUser$Response(params: ShopUserLockUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUserLockUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserLockUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserLockUser(params: ShopUserLockUser$Params, context?: HttpContext): Observable<void> {
    return this.shopUserLockUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopUserUnlockUser()` */
  static readonly ShopUserUnlockUserPath = '/api/v1/shop-users/{shopUserId}/unlock';

  /**
   * Mở khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserUnlockUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserUnlockUser$Response(params: ShopUserUnlockUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUserUnlockUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Mở khóa tài khoản nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserUnlockUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserUnlockUser(params: ShopUserUnlockUser$Params, context?: HttpContext): Observable<void> {
    return this.shopUserUnlockUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopUserGetCurrentShopUser()` */
  static readonly ShopUserGetCurrentShopUserPath = '/api/v1/shop-users/current';

  /**
   * Lấy thông tin nhân viên cửa hàng đang đăng nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserGetCurrentShopUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetCurrentShopUser$Response(params?: ShopUserGetCurrentShopUser$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserDto>> {
    return shopUserGetCurrentShopUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin nhân viên cửa hàng đang đăng nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserGetCurrentShopUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserGetCurrentShopUser(params?: ShopUserGetCurrentShopUser$Params, context?: HttpContext): Observable<ShopUserDto> {
    return this.shopUserGetCurrentShopUser$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserDto>): ShopUserDto => r.body)
    );
  }

  /** Path part for operation `shopUserCheckIfAnyShopUserWithPhoneHasExisted()` */
  static readonly ShopUserCheckIfAnyShopUserWithPhoneHasExistedPath = '/api/v1/shop-users/check-existed-by-phone';

  /**
   * Kiểm tra liệu có nhân viên nào với số điện thoại đã tồn tại trong cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUserCheckIfAnyShopUserWithPhoneHasExisted()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserCheckIfAnyShopUserWithPhoneHasExisted$Response(params?: ShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>> {
    return shopUserCheckIfAnyShopUserWithPhoneHasExisted(this.http, this.rootUrl, params, context);
  }

  /**
   * Kiểm tra liệu có nhân viên nào với số điện thoại đã tồn tại trong cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUserCheckIfAnyShopUserWithPhoneHasExisted$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopUserCheckIfAnyShopUserWithPhoneHasExisted(params?: ShopUserCheckIfAnyShopUserWithPhoneHasExisted$Params, context?: HttpContext): Observable<ShopUserPhoneCheckResultDto> {
    return this.shopUserCheckIfAnyShopUserWithPhoneHasExisted$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopUserPhoneCheckResultDto>): ShopUserPhoneCheckResultDto => r.body)
    );
  }

}
