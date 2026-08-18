/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { SendSmsOtpResultDto } from '../models/send-sms-otp-result-dto';
import { SignInOriginalResultDto } from '../models/sign-in-original-result-dto';
import { SignInPasswordResultDto } from '../models/sign-in-password-result-dto';
import { signInRefreshToken } from '../fn/sign-in/sign-in-refresh-token';
import { SignInRefreshToken$Params } from '../fn/sign-in/sign-in-refresh-token';
import { signInRefreshToken2 } from '../fn/sign-in/sign-in-refresh-token-2';
import { SignInRefreshToken2$Params } from '../fn/sign-in/sign-in-refresh-token-2';
import { signInSendSmsOtp } from '../fn/sign-in/sign-in-send-sms-otp';
import { SignInSendSmsOtp$Params } from '../fn/sign-in/sign-in-send-sms-otp';
import { signInSendSmsOtp2 } from '../fn/sign-in/sign-in-send-sms-otp-2';
import { SignInSendSmsOtp2$Params } from '../fn/sign-in/sign-in-send-sms-otp-2';
import { signInSigninPassword } from '../fn/sign-in/sign-in-signin-password';
import { signInSignInPassword } from '../fn/sign-in/sign-in-sign-in-password';
import { SignInSigninPassword$Params } from '../fn/sign-in/sign-in-signin-password';
import { SignInSignInPassword$Params } from '../fn/sign-in/sign-in-sign-in-password';
import { signInSigninPassword2 } from '../fn/sign-in/sign-in-signin-password-2';
import { signInSignInPassword2 } from '../fn/sign-in/sign-in-sign-in-password-2';
import { SignInSigninPassword2$Params } from '../fn/sign-in/sign-in-signin-password-2';
import { SignInSignInPassword2$Params } from '../fn/sign-in/sign-in-sign-in-password-2';
import { signInSignInSmsOtp } from '../fn/sign-in/sign-in-sign-in-sms-otp';
import { SignInSignInSmsOtp$Params } from '../fn/sign-in/sign-in-sign-in-sms-otp';
import { signInSignInSmsOtp2 } from '../fn/sign-in/sign-in-sign-in-sms-otp-2';
import { SignInSignInSmsOtp2$Params } from '../fn/sign-in/sign-in-sign-in-sms-otp-2';
import { signInSigninTenant } from '../fn/sign-in/sign-in-signin-tenant';
import { signInSignInTenant } from '../fn/sign-in/sign-in-sign-in-tenant';
import { SignInSigninTenant$Params } from '../fn/sign-in/sign-in-signin-tenant';
import { SignInSignInTenant$Params } from '../fn/sign-in/sign-in-sign-in-tenant';
import { SignInSmsOtpResultDto } from '../models/sign-in-sms-otp-result-dto';

@Injectable()
export class SignInService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `signInSendSmsOtp()` */
  static readonly SignInSendSmsOtpPath = '/api/v1/sign-in/otpsms/send';

  /**
   * Gửi otp qua số điện thoại để đăng nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSendSmsOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSendSmsOtp$Response(params: SignInSendSmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signInSendSmsOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi otp qua số điện thoại để đăng nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSendSmsOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSendSmsOtp(params: SignInSendSmsOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.signInSendSmsOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signInSignInSmsOtp()` */
  static readonly SignInSignInSmsOtpPath = '/api/v1/sign-in/otpsms';

  /**
   * Đăng nhập bằng sms với otp nhận từ api gửi otp qua số điện thoại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSignInSmsOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInSmsOtp$Response(params: SignInSignInSmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signInSignInSmsOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Đăng nhập bằng sms với otp nhận từ api gửi otp qua số điện thoại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSignInSmsOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInSmsOtp(params: SignInSignInSmsOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.signInSignInSmsOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signInSigninPassword()` */
  static readonly SignInSigninPasswordPath = '/api/v1/sign-in/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSigninPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSigninPassword$Response(params: SignInSigninPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signInSigninPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSigninPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSigninPassword(params: SignInSigninPassword$Params, context?: HttpContext): Observable<Blob> {
    return this.signInSigninPassword$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signInSigninTenant()` */
  static readonly SignInSigninTenantPath = '/api/v1/sign-in/tenant';

  /**
   * Đăng nhập vào tenant khác bằng token hiện tại của user.
   *
   * Lưu ý:
   * - User phải có quyền  đăng nhập vào tenant tương ứng
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSigninTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  signInSigninTenant$Response(params?: SignInSigninTenant$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signInSigninTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * Đăng nhập vào tenant khác bằng token hiện tại của user.
   *
   * Lưu ý:
   * - User phải có quyền  đăng nhập vào tenant tương ứng
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSigninTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signInSigninTenant(params?: SignInSigninTenant$Params, context?: HttpContext): Observable<Blob> {
    return this.signInSigninTenant$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signInSigninPassword2()` */
  static readonly SignInSigninPassword2Path = '/api/v1/sign-in/password';

  /**
   * Đăng nhập bằng tài khoản và mật khẩu.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSigninPassword2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSigninPassword2$Response(params: SignInSigninPassword2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signInSigninPassword2(this.http, this.rootUrl, params, context);
  }

  /**
   * Đăng nhập bằng tài khoản và mật khẩu.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSigninPassword2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSigninPassword2(params: SignInSigninPassword2$Params, context?: HttpContext): Observable<Blob> {
    return this.signInSigninPassword2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signInRefreshToken()` */
  static readonly SignInRefreshTokenPath = '/api/v1/sign-in/refresh-token';

  /**
   * Lấy thông tin Access Token mới bằng Refresh Token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInRefreshToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInRefreshToken$Response(params: SignInRefreshToken$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signInRefreshToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin Access Token mới bằng Refresh Token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInRefreshToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInRefreshToken(params: SignInRefreshToken$Params, context?: HttpContext): Observable<Blob> {
    return this.signInRefreshToken$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signInSignInPassword()` */
  static readonly SignInSignInPasswordPath = '/api/v2/sign-in/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSignInPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInPassword$Response(params: SignInSignInPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInPasswordResultDto>> {
    return signInSignInPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSignInPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInPassword(params: SignInSignInPassword$Params, context?: HttpContext): Observable<SignInPasswordResultDto> {
    return this.signInSignInPassword$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignInPasswordResultDto>): SignInPasswordResultDto => r.body)
    );
  }

  /** Path part for operation `signInSendSmsOtp2()` */
  static readonly SignInSendSmsOtp2Path = '/api/v2/sign-in/otpsms/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSendSmsOtp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSendSmsOtp2$Response(params: SignInSendSmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SendSmsOtpResultDto>> {
    return signInSendSmsOtp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSendSmsOtp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSendSmsOtp2(params: SignInSendSmsOtp2$Params, context?: HttpContext): Observable<SendSmsOtpResultDto> {
    return this.signInSendSmsOtp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SendSmsOtpResultDto>): SendSmsOtpResultDto => r.body)
    );
  }

  /** Path part for operation `signInSignInSmsOtp2()` */
  static readonly SignInSignInSmsOtp2Path = '/api/v2/sign-in/otpsms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSignInSmsOtp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInSmsOtp2$Response(params: SignInSignInSmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInSmsOtpResultDto>> {
    return signInSignInSmsOtp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSignInSmsOtp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInSmsOtp2(params: SignInSignInSmsOtp2$Params, context?: HttpContext): Observable<SignInSmsOtpResultDto> {
    return this.signInSignInSmsOtp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignInSmsOtpResultDto>): SignInSmsOtpResultDto => r.body)
    );
  }

  /** Path part for operation `signInSignInPassword2()` */
  static readonly SignInSignInPassword2Path = '/api/v2/sign-in/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSignInPassword2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInPassword2$Response(params: SignInSignInPassword2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInOriginalResultDto>> {
    return signInSignInPassword2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSignInPassword2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInSignInPassword2(params: SignInSignInPassword2$Params, context?: HttpContext): Observable<SignInOriginalResultDto> {
    return this.signInSignInPassword2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignInOriginalResultDto>): SignInOriginalResultDto => r.body)
    );
  }

  /** Path part for operation `signInSignInTenant()` */
  static readonly SignInSignInTenantPath = '/api/v2/sign-in/tenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInSignInTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  signInSignInTenant$Response(params?: SignInSignInTenant$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInOriginalResultDto>> {
    return signInSignInTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInSignInTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signInSignInTenant(params?: SignInSignInTenant$Params, context?: HttpContext): Observable<SignInOriginalResultDto> {
    return this.signInSignInTenant$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignInOriginalResultDto>): SignInOriginalResultDto => r.body)
    );
  }

  /** Path part for operation `signInRefreshToken2()` */
  static readonly SignInRefreshToken2Path = '/api/v2/sign-in/refresh-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signInRefreshToken2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInRefreshToken2$Response(params: SignInRefreshToken2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignInOriginalResultDto>> {
    return signInRefreshToken2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signInRefreshToken2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signInRefreshToken2(params: SignInRefreshToken2$Params, context?: HttpContext): Observable<SignInOriginalResultDto> {
    return this.signInRefreshToken2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignInOriginalResultDto>): SignInOriginalResultDto => r.body)
    );
  }

}
