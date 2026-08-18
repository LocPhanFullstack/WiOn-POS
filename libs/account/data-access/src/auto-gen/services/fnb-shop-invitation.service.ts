/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { BusinessInvitationDto } from '../models/business-invitation-dto';
import { fnbShopInvitationAcceptAllInvitation } from '../fn/fnb-shop-invitation/fnb-shop-invitation-accept-all-invitation';
import { FnbShopInvitationAcceptAllInvitation$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-accept-all-invitation';
import { fnbShopInvitationAcceptInvitation } from '../fn/fnb-shop-invitation/fnb-shop-invitation-accept-invitation';
import { FnbShopInvitationAcceptInvitation$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-accept-invitation';
import { fnbShopInvitationGetInvitationUrl } from '../fn/fnb-shop-invitation/fnb-shop-invitation-get-invitation-url';
import { FnbShopInvitationGetInvitationUrl$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-get-invitation-url';
import { fnbShopInvitationGetUserInvitationList } from '../fn/fnb-shop-invitation/fnb-shop-invitation-get-user-invitation-list';
import { FnbShopInvitationGetUserInvitationList$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-get-user-invitation-list';
import { fnbShopInvitationRefuseAllInvitation } from '../fn/fnb-shop-invitation/fnb-shop-invitation-refuse-all-invitation';
import { FnbShopInvitationRefuseAllInvitation$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-refuse-all-invitation';
import { fnbShopInvitationRefuseInvitation } from '../fn/fnb-shop-invitation/fnb-shop-invitation-refuse-invitation';
import { FnbShopInvitationRefuseInvitation$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-refuse-invitation';
import { fnbShopInvitationSendInvitation } from '../fn/fnb-shop-invitation/fnb-shop-invitation-send-invitation';
import { FnbShopInvitationSendInvitation$Params } from '../fn/fnb-shop-invitation/fnb-shop-invitation-send-invitation';
import { InvitationUrlDto } from '../models/invitation-url-dto';
import { InviteCreateResponseDto } from '../models/invite-create-response-dto';

@Injectable()
export class FnbShopInvitationService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `fnbShopInvitationGetInvitationUrl()` */
  static readonly FnbShopInvitationGetInvitationUrlPath = '/api/v1/fnb-invitations/url';

  /**
   * Lấy thông tin đường dẫn lời mời tham gia.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationGetInvitationUrl()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationGetInvitationUrl$Response(params?: FnbShopInvitationGetInvitationUrl$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InvitationUrlDto>> {
    return fnbShopInvitationGetInvitationUrl(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin đường dẫn lời mời tham gia.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationGetInvitationUrl$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationGetInvitationUrl(params?: FnbShopInvitationGetInvitationUrl$Params, context?: HttpContext): Observable<InvitationUrlDto> {
    return this.fnbShopInvitationGetInvitationUrl$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<InvitationUrlDto>): InvitationUrlDto => r.body)
    );
  }

  /** Path part for operation `fnbShopInvitationGetUserInvitationList()` */
  static readonly FnbShopInvitationGetUserInvitationListPath = '/api/v1/fnb-invitations';

  /**
   * Lấy danh sách lời mời của người dùng hiện tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationGetUserInvitationList()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationGetUserInvitationList$Response(params?: FnbShopInvitationGetUserInvitationList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<BusinessInvitationDto>>> {
    return fnbShopInvitationGetUserInvitationList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách lời mời của người dùng hiện tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationGetUserInvitationList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationGetUserInvitationList(params?: FnbShopInvitationGetUserInvitationList$Params, context?: HttpContext): Observable<Array<BusinessInvitationDto>> {
    return this.fnbShopInvitationGetUserInvitationList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<BusinessInvitationDto>>): Array<BusinessInvitationDto> => r.body)
    );
  }

  /** Path part for operation `fnbShopInvitationSendInvitation()` */
  static readonly FnbShopInvitationSendInvitationPath = '/api/v1/fnb-invitations';

  /**
   * Gửi lời mời cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationSendInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopInvitationSendInvitation$Response(params: FnbShopInvitationSendInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InviteCreateResponseDto>> {
    return fnbShopInvitationSendInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi lời mời cho nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationSendInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopInvitationSendInvitation(params: FnbShopInvitationSendInvitation$Params, context?: HttpContext): Observable<InviteCreateResponseDto> {
    return this.fnbShopInvitationSendInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<InviteCreateResponseDto>): InviteCreateResponseDto => r.body)
    );
  }

  /** Path part for operation `fnbShopInvitationAcceptInvitation()` */
  static readonly FnbShopInvitationAcceptInvitationPath = '/api/v1/fnb-invitations/{invitationId}/accept';

  /**
   * Đồng ý lời mời.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationAcceptInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationAcceptInvitation$Response(params: FnbShopInvitationAcceptInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopInvitationAcceptInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Đồng ý lời mời.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationAcceptInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationAcceptInvitation(params: FnbShopInvitationAcceptInvitation$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopInvitationAcceptInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopInvitationRefuseInvitation()` */
  static readonly FnbShopInvitationRefuseInvitationPath = '/api/v1/fnb-invitations/{invitationId}/refuse';

  /**
   * Từ chối lời mời.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationRefuseInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopInvitationRefuseInvitation$Response(params: FnbShopInvitationRefuseInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopInvitationRefuseInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Từ chối lời mời.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationRefuseInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopInvitationRefuseInvitation(params: FnbShopInvitationRefuseInvitation$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopInvitationRefuseInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopInvitationAcceptAllInvitation()` */
  static readonly FnbShopInvitationAcceptAllInvitationPath = '/api/v1/fnb-invitations/accept-all';

  /**
   * Đồng ý tất cả lời mời của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationAcceptAllInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationAcceptAllInvitation$Response(params?: FnbShopInvitationAcceptAllInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopInvitationAcceptAllInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Đồng ý tất cả lời mời của user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationAcceptAllInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fnbShopInvitationAcceptAllInvitation(params?: FnbShopInvitationAcceptAllInvitation$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopInvitationAcceptAllInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fnbShopInvitationRefuseAllInvitation()` */
  static readonly FnbShopInvitationRefuseAllInvitationPath = '/api/v1/fnb-invitations/refuse-all';

  /**
   * Từ chối tất cả lời mời.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fnbShopInvitationRefuseAllInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopInvitationRefuseAllInvitation$Response(params: FnbShopInvitationRefuseAllInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return fnbShopInvitationRefuseAllInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Từ chối tất cả lời mời.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fnbShopInvitationRefuseAllInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fnbShopInvitationRefuseAllInvitation(params: FnbShopInvitationRefuseAllInvitation$Params, context?: HttpContext): Observable<void> {
    return this.fnbShopInvitationRefuseAllInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
