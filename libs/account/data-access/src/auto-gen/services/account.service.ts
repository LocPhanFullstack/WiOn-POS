/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { accountChangePassword } from '../fn/account/account-change-password';
import { AccountChangePassword$Params } from '../fn/account/account-change-password';
import { accountChangePassword2 } from '../fn/account/account-change-password-2';
import { AccountChangePassword2$Params } from '../fn/account/account-change-password-2';
import { accountChangeProfile } from '../fn/account/account-change-profile';
import { AccountChangeProfile$Params } from '../fn/account/account-change-profile';
import { accountChangeProfile2 } from '../fn/account/account-change-profile-2';
import { AccountChangeProfile2$Params } from '../fn/account/account-change-profile-2';
import { accountCheckPassword } from '../fn/account/account-check-password';
import { AccountCheckPassword$Params } from '../fn/account/account-check-password';
import { accountCreateUpdateAvatar } from '../fn/account/account-create-update-avatar';
import { AccountCreateUpdateAvatar$Params } from '../fn/account/account-create-update-avatar';
import { accountGetUserProfile } from '../fn/account/account-get-user-profile';
import { AccountGetUserProfile$Params } from '../fn/account/account-get-user-profile';
import { AccountProfileUpdateResultDto } from '../models/account-profile-update-result-dto';
import { accountResetPasswordEmail } from '../fn/account/account-reset-password-email';
import { AccountResetPasswordEmail$Params } from '../fn/account/account-reset-password-email';
import { accountResetPasswordEmail2 } from '../fn/account/account-reset-password-email-2';
import { AccountResetPasswordEmail2$Params } from '../fn/account/account-reset-password-email-2';
import { accountResetPasswordEmailSend } from '../fn/account/account-reset-password-email-send';
import { AccountResetPasswordEmailSend$Params } from '../fn/account/account-reset-password-email-send';
import { accountResetPasswordEmailSend2 } from '../fn/account/account-reset-password-email-send-2';
import { AccountResetPasswordEmailSend2$Params } from '../fn/account/account-reset-password-email-send-2';
import { accountResetPasswordSms } from '../fn/account/account-reset-password-sms';
import { AccountResetPasswordSms$Params } from '../fn/account/account-reset-password-sms';
import { accountResetPasswordSms2 } from '../fn/account/account-reset-password-sms-2';
import { AccountResetPasswordSms2$Params } from '../fn/account/account-reset-password-sms-2';
import { accountResetPasswordSmsSend } from '../fn/account/account-reset-password-sms-send';
import { AccountResetPasswordSmsSend$Params } from '../fn/account/account-reset-password-sms-send';
import { accountResetPasswordSmsSend2 } from '../fn/account/account-reset-password-sms-send-2';
import { AccountResetPasswordSmsSend2$Params } from '../fn/account/account-reset-password-sms-send-2';
import { accountResetPasswordVerifyEmailOtp } from '../fn/account/account-reset-password-verify-email-otp';
import { AccountResetPasswordVerifyEmailOtp$Params } from '../fn/account/account-reset-password-verify-email-otp';
import { accountResetPasswordVerifyEmailOtp2 } from '../fn/account/account-reset-password-verify-email-otp-2';
import { AccountResetPasswordVerifyEmailOtp2$Params } from '../fn/account/account-reset-password-verify-email-otp-2';
import { accountResetPasswordVerifySmsOtp } from '../fn/account/account-reset-password-verify-sms-otp';
import { AccountResetPasswordVerifySmsOtp$Params } from '../fn/account/account-reset-password-verify-sms-otp';
import { accountResetPasswordVerifySmsOtp2 } from '../fn/account/account-reset-password-verify-sms-otp-2';
import { AccountResetPasswordVerifySmsOtp2$Params } from '../fn/account/account-reset-password-verify-sms-otp-2';
import { accountUpdateUserProfile } from '../fn/account/account-update-user-profile';
import { AccountUpdateUserProfile$Params } from '../fn/account/account-update-user-profile';
import { ChangePasswordResultDto } from '../models/change-password-result-dto';
import { CheckUserPasswordResponseDto } from '../models/check-user-password-response-dto';
import { ResetPasswordEmailResultDto } from '../models/reset-password-email-result-dto';
import { ResetPasswordSmsResultDto } from '../models/reset-password-sms-result-dto';
import { SendEmailOtpResultDto } from '../models/send-email-otp-result-dto';
import { SendSmsOtpResultDto } from '../models/send-sms-otp-result-dto';
import { UserProfileDto } from '../models/user-profile-dto';
import { VerifyOtpResultDto } from '../models/verify-otp-result-dto';

@Injectable({ providedIn: 'root' })
export class AccountService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `accountGetUserProfile()` */
  static readonly AccountGetUserProfilePath = '/api/v1/account/profile';

  /**
   * Lấy thông tin User Account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserProfile$Response(params?: AccountGetUserProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<UserProfileDto>> {
    return accountGetUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin User Account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserProfile(params?: AccountGetUserProfile$Params, context?: HttpContext): Observable<UserProfileDto> {
    return this.accountGetUserProfile$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<UserProfileDto>): UserProfileDto => r.body)
    );
  }

  /** Path part for operation `accountChangeProfile()` */
  static readonly AccountChangeProfilePath = '/api/v1/account/profile';

  /**
   * Thay đổi thông tin User Account.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangeProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangeProfile$Response(params: AccountChangeProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountChangeProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Thay đổi thông tin User Account.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountChangeProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangeProfile(params: AccountChangeProfile$Params, context?: HttpContext): Observable<Blob> {
    return this.accountChangeProfile$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUpdateUserProfile()` */
  static readonly AccountUpdateUserProfilePath = '/api/v1/account/profile';

  /**
   * Thêm mới hoặc cập nhật thông tin user profile.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUpdateUserProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUpdateUserProfile$Response(params: AccountUpdateUserProfile$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return accountUpdateUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm mới hoặc cập nhật thông tin user profile.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUpdateUserProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUpdateUserProfile(params: AccountUpdateUserProfile$Params, context?: HttpContext): Observable<void> {
    return this.accountUpdateUserProfile$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `accountCreateUpdateAvatar()` */
  static readonly AccountCreateUpdateAvatarPath = '/api/v1/account/avatar';

  /**
   * Tạo hoặc cập nhật ảnh đại diện của tài khoản người dùng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountCreateUpdateAvatar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountCreateUpdateAvatar$Response(params: AccountCreateUpdateAvatar$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return accountCreateUpdateAvatar(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo hoặc cập nhật ảnh đại diện của tài khoản người dùng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountCreateUpdateAvatar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountCreateUpdateAvatar(params: AccountCreateUpdateAvatar$Params, context?: HttpContext): Observable<void> {
    return this.accountCreateUpdateAvatar$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordSmsSend()` */
  static readonly AccountResetPasswordSmsSendPath = '/api/v1/account/reset-password/sms/send-otp';

  /**
   * Gửi otp reset password bằng SMS OTP.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordSmsSend()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSmsSend$Response(params: AccountResetPasswordSmsSend$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountResetPasswordSmsSend(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi otp reset password bằng SMS OTP.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordSmsSend$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSmsSend(params: AccountResetPasswordSmsSend$Params, context?: HttpContext): Observable<Blob> {
    return this.accountResetPasswordSmsSend$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordVerifySmsOtp()` */
  static readonly AccountResetPasswordVerifySmsOtpPath = '/api/v1/account/reset-password/sms/verify-otp';

  /**
   * Xác nhận otp reset password bằng SMS OTP.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordVerifySmsOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifySmsOtp$Response(params: AccountResetPasswordVerifySmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountResetPasswordVerifySmsOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xác nhận otp reset password bằng SMS OTP.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordVerifySmsOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifySmsOtp(params: AccountResetPasswordVerifySmsOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.accountResetPasswordVerifySmsOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordSms()` */
  static readonly AccountResetPasswordSmsPath = '/api/v1/account/reset-password/sms';

  /**
   * Reset password bằng SMS OTP.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordSms()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSms$Response(params: AccountResetPasswordSms$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountResetPasswordSms(this.http, this.rootUrl, params, context);
  }

  /**
   * Reset password bằng SMS OTP.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordSms$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSms(params: AccountResetPasswordSms$Params, context?: HttpContext): Observable<Blob> {
    return this.accountResetPasswordSms$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordEmailSend()` */
  static readonly AccountResetPasswordEmailSendPath = '/api/v1/account/reset-password/email/send-otp';

  /**
   * Gửi otp reset password bằng Email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordEmailSend()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmailSend$Response(params: AccountResetPasswordEmailSend$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountResetPasswordEmailSend(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi otp reset password bằng Email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordEmailSend$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmailSend(params: AccountResetPasswordEmailSend$Params, context?: HttpContext): Observable<Blob> {
    return this.accountResetPasswordEmailSend$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordVerifyEmailOtp()` */
  static readonly AccountResetPasswordVerifyEmailOtpPath = '/api/v1/account/reset-password/email/verify-otp';

  /**
   * Xác nhận otp reset password bằng Email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordVerifyEmailOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifyEmailOtp$Response(params: AccountResetPasswordVerifyEmailOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountResetPasswordVerifyEmailOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xác nhận otp reset password bằng Email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordVerifyEmailOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifyEmailOtp(params: AccountResetPasswordVerifyEmailOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.accountResetPasswordVerifyEmailOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordEmail()` */
  static readonly AccountResetPasswordEmailPath = '/api/v1/account/reset-password/email';

  /**
   * Reset password bằng Email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmail$Response(params: AccountResetPasswordEmail$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountResetPasswordEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Reset password bằng Email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmail(params: AccountResetPasswordEmail$Params, context?: HttpContext): Observable<Blob> {
    return this.accountResetPasswordEmail$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountChangePassword()` */
  static readonly AccountChangePasswordPath = '/api/v1/account/change-password';

  /**
   * Thay đổi mật khẩu.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangePassword$Response(params: AccountChangePassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return accountChangePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Thay đổi mật khẩu.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountChangePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangePassword(params: AccountChangePassword$Params, context?: HttpContext): Observable<Blob> {
    return this.accountChangePassword$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountCheckPassword()` */
  static readonly AccountCheckPasswordPath = '/api/v1/account/check-password';

  /**
   * Kiểm tra mật khẩu người dùng hiện tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountCheckPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountCheckPassword$Response(params: AccountCheckPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CheckUserPasswordResponseDto>> {
    return accountCheckPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Kiểm tra mật khẩu người dùng hiện tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountCheckPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountCheckPassword(params: AccountCheckPassword$Params, context?: HttpContext): Observable<CheckUserPasswordResponseDto> {
    return this.accountCheckPassword$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<CheckUserPasswordResponseDto>): CheckUserPasswordResponseDto => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordSmsSend2()` */
  static readonly AccountResetPasswordSmsSend2Path = '/api/v2/account/reset-password/sms/send-otp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordSmsSend2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSmsSend2$Response(params: AccountResetPasswordSmsSend2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SendSmsOtpResultDto>> {
    return accountResetPasswordSmsSend2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordSmsSend2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSmsSend2(params: AccountResetPasswordSmsSend2$Params, context?: HttpContext): Observable<SendSmsOtpResultDto> {
    return this.accountResetPasswordSmsSend2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SendSmsOtpResultDto>): SendSmsOtpResultDto => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordVerifySmsOtp2()` */
  static readonly AccountResetPasswordVerifySmsOtp2Path = '/api/v2/account/reset-password/sms/verify-otp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordVerifySmsOtp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifySmsOtp2$Response(params: AccountResetPasswordVerifySmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<VerifyOtpResultDto>> {
    return accountResetPasswordVerifySmsOtp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordVerifySmsOtp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifySmsOtp2(params: AccountResetPasswordVerifySmsOtp2$Params, context?: HttpContext): Observable<VerifyOtpResultDto> {
    return this.accountResetPasswordVerifySmsOtp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<VerifyOtpResultDto>): VerifyOtpResultDto => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordSms2()` */
  static readonly AccountResetPasswordSms2Path = '/api/v2/account/reset-password/sms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordSms2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSms2$Response(params: AccountResetPasswordSms2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ResetPasswordSmsResultDto>> {
    return accountResetPasswordSms2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordSms2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordSms2(params: AccountResetPasswordSms2$Params, context?: HttpContext): Observable<ResetPasswordSmsResultDto> {
    return this.accountResetPasswordSms2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ResetPasswordSmsResultDto>): ResetPasswordSmsResultDto => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordEmailSend2()` */
  static readonly AccountResetPasswordEmailSend2Path = '/api/v2/account/reset-password/email/send-otp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordEmailSend2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmailSend2$Response(params: AccountResetPasswordEmailSend2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SendEmailOtpResultDto>> {
    return accountResetPasswordEmailSend2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordEmailSend2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmailSend2(params: AccountResetPasswordEmailSend2$Params, context?: HttpContext): Observable<SendEmailOtpResultDto> {
    return this.accountResetPasswordEmailSend2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SendEmailOtpResultDto>): SendEmailOtpResultDto => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordVerifyEmailOtp2()` */
  static readonly AccountResetPasswordVerifyEmailOtp2Path = '/api/v2/account/reset-password/email/verify-otp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordVerifyEmailOtp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifyEmailOtp2$Response(params: AccountResetPasswordVerifyEmailOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<VerifyOtpResultDto>> {
    return accountResetPasswordVerifyEmailOtp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordVerifyEmailOtp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordVerifyEmailOtp2(params: AccountResetPasswordVerifyEmailOtp2$Params, context?: HttpContext): Observable<VerifyOtpResultDto> {
    return this.accountResetPasswordVerifyEmailOtp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<VerifyOtpResultDto>): VerifyOtpResultDto => r.body)
    );
  }

  /** Path part for operation `accountResetPasswordEmail2()` */
  static readonly AccountResetPasswordEmail2Path = '/api/v2/account/reset-password/email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountResetPasswordEmail2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmail2$Response(params: AccountResetPasswordEmail2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ResetPasswordEmailResultDto>> {
    return accountResetPasswordEmail2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountResetPasswordEmail2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountResetPasswordEmail2(params: AccountResetPasswordEmail2$Params, context?: HttpContext): Observable<ResetPasswordEmailResultDto> {
    return this.accountResetPasswordEmail2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ResetPasswordEmailResultDto>): ResetPasswordEmailResultDto => r.body)
    );
  }

  /** Path part for operation `accountChangePassword2()` */
  static readonly AccountChangePassword2Path = '/api/v2/account/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangePassword2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangePassword2$Response(params: AccountChangePassword2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ChangePasswordResultDto>> {
    return accountChangePassword2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountChangePassword2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangePassword2(params: AccountChangePassword2$Params, context?: HttpContext): Observable<ChangePasswordResultDto> {
    return this.accountChangePassword2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ChangePasswordResultDto>): ChangePasswordResultDto => r.body)
    );
  }

  /** Path part for operation `accountChangeProfile2()` */
  static readonly AccountChangeProfile2Path = '/api/v2/account/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountChangeProfile2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangeProfile2$Response(params: AccountChangeProfile2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<AccountProfileUpdateResultDto>> {
    return accountChangeProfile2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountChangeProfile2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountChangeProfile2(params: AccountChangeProfile2$Params, context?: HttpContext): Observable<AccountProfileUpdateResultDto> {
    return this.accountChangeProfile2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<AccountProfileUpdateResultDto>): AccountProfileUpdateResultDto => r.body)
    );
  }

}
