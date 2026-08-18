/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { TokenDto } from '../models/token-dto';
import { TransactionDto } from '../models/transaction-dto';
import { wiOnPosAccountDeleteAccount } from '../fn/wi-on-pos-account/wi-on-pos-account-delete-account';
import { WiOnPosAccountDeleteAccount$Params } from '../fn/wi-on-pos-account/wi-on-pos-account-delete-account';
import { wiOnPosAccountDeleteAccountSendOtp } from '../fn/wi-on-pos-account/wi-on-pos-account-delete-account-send-otp';
import { WiOnPosAccountDeleteAccountSendOtp$Params } from '../fn/wi-on-pos-account/wi-on-pos-account-delete-account-send-otp';
import { wiOnPosAccountDeleteAccountVerifyPassword } from '../fn/wi-on-pos-account/wi-on-pos-account-delete-account-verify-password';
import { WiOnPosAccountDeleteAccountVerifyPassword$Params } from '../fn/wi-on-pos-account/wi-on-pos-account-delete-account-verify-password';

@Injectable()
export class WiOnPosAccountService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `wiOnPosAccountDeleteAccountVerifyPassword()` */
  static readonly WiOnPosAccountDeleteAccountVerifyPasswordPath = '/api/v1/wionpos-account/verify-password';

  /**
   * Xóa tài khoản của người dùng trên ứng dụng, xác nhận mật khẩu tài khoản.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `wiOnPosAccountDeleteAccountVerifyPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  wiOnPosAccountDeleteAccountVerifyPassword$Response(params: WiOnPosAccountDeleteAccountVerifyPassword$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TransactionDto>> {
    return wiOnPosAccountDeleteAccountVerifyPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa tài khoản của người dùng trên ứng dụng, xác nhận mật khẩu tài khoản.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `wiOnPosAccountDeleteAccountVerifyPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  wiOnPosAccountDeleteAccountVerifyPassword(params: WiOnPosAccountDeleteAccountVerifyPassword$Params, context?: HttpContext): Observable<TransactionDto> {
    return this.wiOnPosAccountDeleteAccountVerifyPassword$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<TransactionDto>): TransactionDto => r.body)
    );
  }

  /** Path part for operation `wiOnPosAccountDeleteAccountSendOtp()` */
  static readonly WiOnPosAccountDeleteAccountSendOtpPath = '/api/v1/wionpos-account/send-otp';

  /**
   * Xóa tài khoản của người dùng trên ứng dụng,chọn phương thức gửi OTP.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `wiOnPosAccountDeleteAccountSendOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  wiOnPosAccountDeleteAccountSendOtp$Response(params: WiOnPosAccountDeleteAccountSendOtp$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<TokenDto>> {
    return wiOnPosAccountDeleteAccountSendOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa tài khoản của người dùng trên ứng dụng,chọn phương thức gửi OTP.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `wiOnPosAccountDeleteAccountSendOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  wiOnPosAccountDeleteAccountSendOtp(params: WiOnPosAccountDeleteAccountSendOtp$Params, context?: HttpContext): Observable<TokenDto> {
    return this.wiOnPosAccountDeleteAccountSendOtp$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<TokenDto>): TokenDto => r.body)
    );
  }

  /** Path part for operation `wiOnPosAccountDeleteAccount()` */
  static readonly WiOnPosAccountDeleteAccountPath = '/api/v1/wionpos-account';

  /**
   * Xóa tài khoản của người dùng trên ứng dụng, xác nhận token, OTP, thực hiện xóa tài khoản.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `wiOnPosAccountDeleteAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  wiOnPosAccountDeleteAccount$Response(params: WiOnPosAccountDeleteAccount$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return wiOnPosAccountDeleteAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa tài khoản của người dùng trên ứng dụng, xác nhận token, OTP, thực hiện xóa tài khoản.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `wiOnPosAccountDeleteAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  wiOnPosAccountDeleteAccount(params: WiOnPosAccountDeleteAccount$Params, context?: HttpContext): Observable<void> {
    return this.wiOnPosAccountDeleteAccount$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
