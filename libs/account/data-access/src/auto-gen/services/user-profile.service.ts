/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { CreateTransactionDeleteResultDto } from '../models/create-transaction-delete-result-dto';
import { userProfileCreateTransactionDelete } from '../fn/user-profile/user-profile-create-transaction-delete';
import { UserProfileCreateTransactionDelete$Params } from '../fn/user-profile/user-profile-create-transaction-delete';
import { userProfileDelete } from '../fn/user-profile/user-profile-delete';
import { UserProfileDelete$Params } from '../fn/user-profile/user-profile-delete';
import { userProfileDeleteSendOtp } from '../fn/user-profile/user-profile-delete-send-otp';
import { UserProfileDeleteSendOtp$Params } from '../fn/user-profile/user-profile-delete-send-otp';
import { UserProfileDto } from '../models/user-profile-dto';
import { userProfileGetUserProfile } from '../fn/user-profile/user-profile-get-user-profile';
import { UserProfileGetUserProfile$Params } from '../fn/user-profile/user-profile-get-user-profile';
import { userProfileUpdateUserProfile } from '../fn/user-profile/user-profile-update-user-profile';
import { UserProfileUpdateUserProfile$Params } from '../fn/user-profile/user-profile-update-user-profile';

@Injectable()
export class UserProfileService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `userProfileGetUserProfile()` */
  static readonly UserProfileGetUserProfilePath = '/api/v1/user-profile';

  /**
   * Lấy thông tin User Account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileGetUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  userProfileGetUserProfile$Response(params?: UserProfileGetUserProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<UserProfileDto>> {
    return userProfileGetUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin User Account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userProfileGetUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userProfileGetUserProfile(params?: UserProfileGetUserProfile$Params, context?: HttpContext): Observable<UserProfileDto> {
    return this.userProfileGetUserProfile$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<UserProfileDto>): UserProfileDto => r.body)
    );
  }

  /** Path part for operation `userProfileUpdateUserProfile()` */
  static readonly UserProfileUpdateUserProfilePath = '/api/v1/user-profile';

  /**
   * Thêm mới hoặc cập nhật thông tin user profile.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileUpdateUserProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileUpdateUserProfile$Response(params: UserProfileUpdateUserProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return userProfileUpdateUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm mới hoặc cập nhật thông tin user profile.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userProfileUpdateUserProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileUpdateUserProfile(params: UserProfileUpdateUserProfile$Params, context?: HttpContext): Observable<void> {
    return this.userProfileUpdateUserProfile$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userProfileDelete()` */
  static readonly UserProfileDeletePath = '/api/v1/user-profile';

  /**
   * Xóa tài khoản (Bao gồm tất cả doanh nghiệp, cửa hàng, nhân viên liên quan đến user này).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileDelete$Response(params: UserProfileDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return userProfileDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa tài khoản (Bao gồm tất cả doanh nghiệp, cửa hàng, nhân viên liên quan đến user này).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userProfileDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileDelete(params: UserProfileDelete$Params, context?: HttpContext): Observable<void> {
    return this.userProfileDelete$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userProfileCreateTransactionDelete()` */
  static readonly UserProfileCreateTransactionDeletePath = '/api/v1/user-profile/delete-transaction';

  /**
   * Tạo transaction cho chức năng xóa (cần nhập mật khẩu để xác thực người dùng hiện tại).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileCreateTransactionDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileCreateTransactionDelete$Response(params: UserProfileCreateTransactionDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CreateTransactionDeleteResultDto>> {
    return userProfileCreateTransactionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo transaction cho chức năng xóa (cần nhập mật khẩu để xác thực người dùng hiện tại).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userProfileCreateTransactionDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileCreateTransactionDelete(params: UserProfileCreateTransactionDelete$Params, context?: HttpContext): Observable<CreateTransactionDeleteResultDto> {
    return this.userProfileCreateTransactionDelete$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<CreateTransactionDeleteResultDto>): CreateTransactionDeleteResultDto => r.body)
    );
  }

  /** Path part for operation `userProfileDeleteSendOtp()` */
  static readonly UserProfileDeleteSendOtpPath = '/api/v1/user-profile/delete-send-otp';

  /**
   * Gửi otp xác nhận.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileDeleteSendOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileDeleteSendOtp$Response(params: UserProfileDeleteSendOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return userProfileDeleteSendOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi otp xác nhận.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userProfileDeleteSendOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userProfileDeleteSendOtp(params: UserProfileDeleteSendOtp$Params, context?: HttpContext): Observable<void> {
    return this.userProfileDeleteSendOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
