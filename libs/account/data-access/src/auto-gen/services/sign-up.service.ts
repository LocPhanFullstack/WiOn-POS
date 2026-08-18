/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { CheckAccountByPhoneResponseDto } from '../models/check-account-by-phone-response-dto';
import { SendSmsOtpResultDto } from '../models/send-sms-otp-result-dto';
import { signUpCheckAccountByPhone } from '../fn/sign-up/sign-up-check-account-by-phone';
import { SignUpCheckAccountByPhone$Params } from '../fn/sign-up/sign-up-check-account-by-phone';
import { SignUpResultDto } from '../models/sign-up-result-dto';
import { signUpSendOtp } from '../fn/sign-up/sign-up-send-otp';
import { SignUpSendOtp$Params } from '../fn/sign-up/sign-up-send-otp';
import { signUpSendSmsOtp } from '../fn/sign-up/sign-up-send-sms-otp';
import { SignUpSendSmsOtp$Params } from '../fn/sign-up/sign-up-send-sms-otp';
import { signUpSendSmsOtp2 } from '../fn/sign-up/sign-up-send-sms-otp-2';
import { SignUpSendSmsOtp2$Params } from '../fn/sign-up/sign-up-send-sms-otp-2';
import { signUpSignUp } from '../fn/sign-up/sign-up-sign-up';
import { SignUpSignUp$Params } from '../fn/sign-up/sign-up-sign-up';
import { signUpSignUp2 } from '../fn/sign-up/sign-up-sign-up-2';
import { SignUpSignUp2$Params } from '../fn/sign-up/sign-up-sign-up-2';
import { signUpVerifyOtp } from '../fn/sign-up/sign-up-verify-otp';
import { SignUpVerifyOtp$Params } from '../fn/sign-up/sign-up-verify-otp';
import { SignUpVerifyOtpResultDto } from '../models/sign-up-verify-otp-result-dto';
import { signUpVerifySmsOtp } from '../fn/sign-up/sign-up-verify-sms-otp';
import { SignUpVerifySmsOtp$Params } from '../fn/sign-up/sign-up-verify-sms-otp';
import { signUpVerifySmsOtp2 } from '../fn/sign-up/sign-up-verify-sms-otp-2';
import { SignUpVerifySmsOtp2$Params } from '../fn/sign-up/sign-up-verify-sms-otp-2';

@Injectable()
export class SignUpService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `signUpCheckAccountByPhone()` */
  static readonly SignUpCheckAccountByPhonePath = '/api/v1/sign-up/check-by-phone';

  /**
   * Kiểm tra số điện thoại đã đăng kí tài khoản chưa.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpCheckAccountByPhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  signUpCheckAccountByPhone$Response(params?: SignUpCheckAccountByPhone$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<CheckAccountByPhoneResponseDto>> {
    return signUpCheckAccountByPhone(this.http, this.rootUrl, params, context);
  }

  /**
   * Kiểm tra số điện thoại đã đăng kí tài khoản chưa.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpCheckAccountByPhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signUpCheckAccountByPhone(params?: SignUpCheckAccountByPhone$Params, context?: HttpContext): Observable<CheckAccountByPhoneResponseDto> {
    return this.signUpCheckAccountByPhone$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<CheckAccountByPhoneResponseDto>): CheckAccountByPhoneResponseDto => r.body)
    );
  }

  /** Path part for operation `signUpSendOtp()` */
  static readonly SignUpSendOtpPath = '/api/v1/sign-up/send-otp';

  /**
   * Liên kết tài khoản với WiOnPOS và Gửi OTP để đăng kí tài khoản vào WiOn-POS.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpSendOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSendOtp$Response(params: SignUpSendOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return signUpSendOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Liên kết tài khoản với WiOnPOS và Gửi OTP để đăng kí tài khoản vào WiOn-POS.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpSendOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSendOtp(params: SignUpSendOtp$Params, context?: HttpContext): Observable<void> {
    return this.signUpSendOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `signUpVerifyOtp()` */
  static readonly SignUpVerifyOtpPath = '/api/v1/sign-up/verify-otp';

  /**
   * Xác nhận OTP để lấy token đăng nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpVerifyOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpVerifyOtp$Response(params: SignUpVerifyOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signUpVerifyOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xác nhận OTP để lấy token đăng nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpVerifyOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpVerifyOtp(params: SignUpVerifyOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.signUpVerifyOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signUpSendSmsOtp()` */
  static readonly SignUpSendSmsOtpPath = '/api/v1/sign-up/otpsms-send';

  /**
   * Gửi OTP cho số điện thoại đăng kí.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpSendSmsOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSendSmsOtp$Response(params: SignUpSendSmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signUpSendSmsOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi OTP cho số điện thoại đăng kí.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpSendSmsOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSendSmsOtp(params: SignUpSendSmsOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.signUpSendSmsOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signUpVerifySmsOtp()` */
  static readonly SignUpVerifySmsOtpPath = '/api/v1/sign-up/otpsms-verify';

  /**
   * Xác nhận OTP để lấy Token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpVerifySmsOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpVerifySmsOtp$Response(params: SignUpVerifySmsOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signUpVerifySmsOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xác nhận OTP để lấy Token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpVerifySmsOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpVerifySmsOtp(params: SignUpVerifySmsOtp$Params, context?: HttpContext): Observable<Blob> {
    return this.signUpVerifySmsOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signUpSignUp()` */
  static readonly SignUpSignUpPath = '/api/v1/sign-up';

  /**
   * Đăng kí tài khoản với OTP và Token đã nhận trước đó.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpSignUp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSignUp$Response(params: SignUpSignUp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Blob>> {
    return signUpSignUp(this.http, this.rootUrl, params, context);
  }

  /**
   * Đăng kí tài khoản với OTP và Token đã nhận trước đó.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpSignUp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSignUp(params: SignUpSignUp$Params, context?: HttpContext): Observable<Blob> {
    return this.signUpSignUp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `signUpSendSmsOtp2()` */
  static readonly SignUpSendSmsOtp2Path = '/api/v2/sign-up/otpsms-send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpSendSmsOtp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSendSmsOtp2$Response(params: SignUpSendSmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SendSmsOtpResultDto>> {
    return signUpSendSmsOtp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpSendSmsOtp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSendSmsOtp2(params: SignUpSendSmsOtp2$Params, context?: HttpContext): Observable<SendSmsOtpResultDto> {
    return this.signUpSendSmsOtp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SendSmsOtpResultDto>): SendSmsOtpResultDto => r.body)
    );
  }

  /** Path part for operation `signUpVerifySmsOtp2()` */
  static readonly SignUpVerifySmsOtp2Path = '/api/v2/sign-up/otpsms-verify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpVerifySmsOtp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpVerifySmsOtp2$Response(params: SignUpVerifySmsOtp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignUpVerifyOtpResultDto>> {
    return signUpVerifySmsOtp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpVerifySmsOtp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpVerifySmsOtp2(params: SignUpVerifySmsOtp2$Params, context?: HttpContext): Observable<SignUpVerifyOtpResultDto> {
    return this.signUpVerifySmsOtp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignUpVerifyOtpResultDto>): SignUpVerifyOtpResultDto => r.body)
    );
  }

  /** Path part for operation `signUpSignUp2()` */
  static readonly SignUpSignUp2Path = '/api/v2/sign-up';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpSignUp2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSignUp2$Response(params: SignUpSignUp2$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SignUpResultDto>> {
    return signUpSignUp2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpSignUp2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpSignUp2(params: SignUpSignUp2$Params, context?: HttpContext): Observable<SignUpResultDto> {
    return this.signUpSignUp2$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SignUpResultDto>): SignUpResultDto => r.body)
    );
  }

}
