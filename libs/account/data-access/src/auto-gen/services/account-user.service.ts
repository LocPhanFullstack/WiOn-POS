/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { accountUserAddToApp } from '../fn/account-user/account-user-add-to-app';
import { AccountUserAddToApp$Params } from '../fn/account-user/account-user-add-to-app';
import { accountUserAddUserToApp } from '../fn/account-user/account-user-add-user-to-app';
import { AccountUserAddUserToApp$Params } from '../fn/account-user/account-user-add-user-to-app';
import { accountUserCheckByPhone } from '../fn/account-user/account-user-check-by-phone';
import { AccountUserCheckByPhone$Params } from '../fn/account-user/account-user-check-by-phone';
import { accountUserCreate } from '../fn/account-user/account-user-create';
import { AccountUserCreate$Params } from '../fn/account-user/account-user-create';
import { accountUserCreate2 } from '../fn/account-user/account-user-create-2';
import { AccountUserCreate2$Params } from '../fn/account-user/account-user-create-2';
import { accountUserFind } from '../fn/account-user/account-user-find';
import { AccountUserFind$Params } from '../fn/account-user/account-user-find';
import { accountUserFindByMail } from '../fn/account-user/account-user-find-by-mail';
import { AccountUserFindByMail$Params } from '../fn/account-user/account-user-find-by-mail';
import { accountUserFindByPhoneNumber } from '../fn/account-user/account-user-find-by-phone-number';
import { AccountUserFindByPhoneNumber$Params } from '../fn/account-user/account-user-find-by-phone-number';
import { accountUserGetList } from '../fn/account-user/account-user-get-list';
import { AccountUserGetList$Params } from '../fn/account-user/account-user-get-list';
import { accountUserGetUserByApp } from '../fn/account-user/account-user-get-user-by-app';
import { AccountUserGetUserByApp$Params } from '../fn/account-user/account-user-get-user-by-app';
import { accountUserRemoveAllFromApp } from '../fn/account-user/account-user-remove-all-from-app';
import { AccountUserRemoveAllFromApp$Params } from '../fn/account-user/account-user-remove-all-from-app';
import { accountUserRemoveFromApp } from '../fn/account-user/account-user-remove-from-app';
import { AccountUserRemoveFromApp$Params } from '../fn/account-user/account-user-remove-from-app';
import { accountUserUpdateEmail } from '../fn/account-user/account-user-update-email';
import { AccountUserUpdateEmail$Params } from '../fn/account-user/account-user-update-email';
import { AddUserToAppResultDto } from '../models/add-user-to-app-result-dto';

@Injectable({ providedIn: 'root' })
export class AccountUserService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `accountUserGetUserByApp()` */
  static readonly AccountUserGetUserByAppPath = '/api/v1/account-users/get-by-app';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserGetUserByApp()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserGetUserByApp$Response(params?: AccountUserGetUserByApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserGetUserByApp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserGetUserByApp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserGetUserByApp(params?: AccountUserGetUserByApp$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserGetUserByApp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserGetList()` */
  static readonly AccountUserGetListPath = '/api/v1/account-users';

  /**
   * Lấy toàn bộ user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserGetList$Response(params?: AccountUserGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy toàn bộ user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserGetList(params?: AccountUserGetList$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserCreate()` */
  static readonly AccountUserCreatePath = '/api/v1/account-users/create';

  /**
   * tạo một user mới chưa tồn tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserCreate$Response(params: AccountUserCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * tạo một user mới chưa tồn tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserCreate(params: AccountUserCreate$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserAddToApp()` */
  static readonly AccountUserAddToAppPath = '/api/v1/account-users/add-to-app';

  /**
   * thêm user đã tồn tại vào app.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserAddToApp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserAddToApp$Response(params: AccountUserAddToApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserAddToApp(this.http, this.rootUrl, params, context);
  }

  /**
   * thêm user đã tồn tại vào app.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserAddToApp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserAddToApp(params: AccountUserAddToApp$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserAddToApp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserRemoveFromApp()` */
  static readonly AccountUserRemoveFromAppPath = '/api/v1/account-users/remove-from-app';

  /**
   * Xóa 1 user khỏi app.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserRemoveFromApp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserRemoveFromApp$Response(params: AccountUserRemoveFromApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserRemoveFromApp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa 1 user khỏi app.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserRemoveFromApp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserRemoveFromApp(params: AccountUserRemoveFromApp$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserRemoveFromApp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserRemoveAllFromApp()` */
  static readonly AccountUserRemoveAllFromAppPath = '/api/v1/account-users/clear-user-app';

  /**
   * Xóa tất cả user có tenant khỏi app.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserRemoveAllFromApp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserRemoveAllFromApp$Response(params: AccountUserRemoveAllFromApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserRemoveAllFromApp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa tất cả user có tenant khỏi app.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserRemoveAllFromApp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserRemoveAllFromApp(params: AccountUserRemoveAllFromApp$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserRemoveAllFromApp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserCreate2()` */
  static readonly AccountUserCreate2Path = '/api/v1/account-users/create-anonymous';

  /**
   * tạo một user nặc danh.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserCreate2()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserCreate2$Response(params?: AccountUserCreate2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserCreate2(this.http, this.rootUrl, params, context);
  }

  /**
   * tạo một user nặc danh.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserCreate2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserCreate2(params?: AccountUserCreate2$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserCreate2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserFind()` */
  static readonly AccountUserFindPath = '/api/v1/account-users/find';

  /**
   * tìm một user bằng mail hoặc số điện thoại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserFind()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserFind$Response(params?: AccountUserFind$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserFind(this.http, this.rootUrl, params, context);
  }

  /**
   * tìm một user bằng mail hoặc số điện thoại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserFind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserFind(params?: AccountUserFind$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserFind$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserFindByMail()` */
  static readonly AccountUserFindByMailPath = '/api/v1/account-users/find-by-mail';

  /**
   * tìm một user bằng mail.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserFindByMail()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserFindByMail$Response(params?: AccountUserFindByMail$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserFindByMail(this.http, this.rootUrl, params, context);
  }

  /**
   * tìm một user bằng mail.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserFindByMail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserFindByMail(params?: AccountUserFindByMail$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserFindByMail$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserFindByPhoneNumber()` */
  static readonly AccountUserFindByPhoneNumberPath = '/api/v1/account-users/find-by-phone';

  /**
   * tìm một user bằng số điện thoại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserFindByPhoneNumber()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserFindByPhoneNumber$Response(params?: AccountUserFindByPhoneNumber$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserFindByPhoneNumber(this.http, this.rootUrl, params, context);
  }

  /**
   * tìm một user bằng số điện thoại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserFindByPhoneNumber$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserFindByPhoneNumber(params?: AccountUserFindByPhoneNumber$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserFindByPhoneNumber$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserUpdateEmail()` */
  static readonly AccountUserUpdateEmailPath = '/api/v1/account-users/update-email/{id}';

  /**
   * update email cho user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserUpdateEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserUpdateEmail$Response(params: AccountUserUpdateEmail$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserUpdateEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * update email cho user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserUpdateEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserUpdateEmail(params: AccountUserUpdateEmail$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserUpdateEmail$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserCheckByPhone()` */
  static readonly AccountUserCheckByPhonePath = '/api/v1/account-users/check-by-phone';

  /**
   * Kiểm tra số điện thoại đã đăng ký tài khoản của app chưa.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserCheckByPhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserCheckByPhone$Response(params?: AccountUserCheckByPhone$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountUserCheckByPhone(this.http, this.rootUrl, params, context);
  }

  /**
   * Kiểm tra số điện thoại đã đăng ký tài khoản của app chưa.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserCheckByPhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountUserCheckByPhone(params?: AccountUserCheckByPhone$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUserCheckByPhone$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUserAddUserToApp()` */
  static readonly AccountUserAddUserToAppPath = '/api/v2/account-user/add-to-app';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserAddUserToApp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserAddUserToApp$Response(params: AccountUserAddUserToApp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<AddUserToAppResultDto>> {
    return accountUserAddUserToApp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUserAddUserToApp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUserAddUserToApp(params: AccountUserAddUserToApp$Params, context?: HttpContext): Observable<AddUserToAppResultDto> {
    return this.accountUserAddUserToApp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<AddUserToAppResultDto>): AddUserToAppResultDto => r.body)
    );
  }

}
