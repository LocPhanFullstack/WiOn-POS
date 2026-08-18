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
import { InvitationUrlDto } from '../models/invitation-url-dto';
import { InviteCreateResponseDto } from '../models/invite-create-response-dto';
import { shopInvitationAcceptAllInvitation } from '../fn/shop-invitation/shop-invitation-accept-all-invitation';
import { ShopInvitationAcceptAllInvitation$Params } from '../fn/shop-invitation/shop-invitation-accept-all-invitation';
import { shopInvitationAcceptInvitation } from '../fn/shop-invitation/shop-invitation-accept-invitation';
import { ShopInvitationAcceptInvitation$Params } from '../fn/shop-invitation/shop-invitation-accept-invitation';
import { shopInvitationGetInvitationUrl } from '../fn/shop-invitation/shop-invitation-get-invitation-url';
import { ShopInvitationGetInvitationUrl$Params } from '../fn/shop-invitation/shop-invitation-get-invitation-url';
import { shopInvitationGetUserInvitationList } from '../fn/shop-invitation/shop-invitation-get-user-invitation-list';
import { ShopInvitationGetUserInvitationList$Params } from '../fn/shop-invitation/shop-invitation-get-user-invitation-list';
import { shopInvitationRefuseAllInvitation } from '../fn/shop-invitation/shop-invitation-refuse-all-invitation';
import { ShopInvitationRefuseAllInvitation$Params } from '../fn/shop-invitation/shop-invitation-refuse-all-invitation';
import { shopInvitationRefuseInvitation } from '../fn/shop-invitation/shop-invitation-refuse-invitation';
import { ShopInvitationRefuseInvitation$Params } from '../fn/shop-invitation/shop-invitation-refuse-invitation';
import { shopInvitationSendInvitation } from '../fn/shop-invitation/shop-invitation-send-invitation';
import { ShopInvitationSendInvitation$Params } from '../fn/shop-invitation/shop-invitation-send-invitation';

@Injectable()
export class ShopInvitationService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `shopInvitationGetInvitationUrl()` */
  static readonly ShopInvitationGetInvitationUrlPath = '/api/v1/invitations/url';

  /**
   * Lấy thông tin đường dẫn lời mời tham gia.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationGetInvitationUrl()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationGetInvitationUrl$Response(params?: ShopInvitationGetInvitationUrl$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InvitationUrlDto>> {
    return shopInvitationGetInvitationUrl(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin đường dẫn lời mời tham gia.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationGetInvitationUrl$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationGetInvitationUrl(params?: ShopInvitationGetInvitationUrl$Params, context?: HttpContext): Observable<InvitationUrlDto> {
    return this.shopInvitationGetInvitationUrl$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<InvitationUrlDto>): InvitationUrlDto => r.body)
    );
  }

  /** Path part for operation `shopInvitationGetUserInvitationList()` */
  static readonly ShopInvitationGetUserInvitationListPath = '/api/v1/invitations';

  /**
   * Lấy danh sách lời mời của người dùng hiện tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationGetUserInvitationList()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationGetUserInvitationList$Response(params?: ShopInvitationGetUserInvitationList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<BusinessInvitationDto>>> {
    return shopInvitationGetUserInvitationList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách lời mời của người dùng hiện tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationGetUserInvitationList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationGetUserInvitationList(params?: ShopInvitationGetUserInvitationList$Params, context?: HttpContext): Observable<Array<BusinessInvitationDto>> {
    return this.shopInvitationGetUserInvitationList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<BusinessInvitationDto>>): Array<BusinessInvitationDto> => r.body)
    );
  }

  /** Path part for operation `shopInvitationSendInvitation()` */
  static readonly ShopInvitationSendInvitationPath = '/api/v1/invitations';

  /**
   * Gửi lời mời cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationSendInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopInvitationSendInvitation$Response(params: ShopInvitationSendInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InviteCreateResponseDto>> {
    return shopInvitationSendInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Gửi lời mời cho nhân viên.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationSendInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopInvitationSendInvitation(params: ShopInvitationSendInvitation$Params, context?: HttpContext): Observable<InviteCreateResponseDto> {
    return this.shopInvitationSendInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<InviteCreateResponseDto>): InviteCreateResponseDto => r.body)
    );
  }

  /** Path part for operation `shopInvitationAcceptInvitation()` */
  static readonly ShopInvitationAcceptInvitationPath = '/api/v1/invitations/{invitationId}/accept';

  /**
   * Đồng ý lời mời.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationAcceptInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationAcceptInvitation$Response(params: ShopInvitationAcceptInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopInvitationAcceptInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Đồng ý lời mời.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationAcceptInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationAcceptInvitation(params: ShopInvitationAcceptInvitation$Params, context?: HttpContext): Observable<void> {
    return this.shopInvitationAcceptInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopInvitationRefuseInvitation()` */
  static readonly ShopInvitationRefuseInvitationPath = '/api/v1/invitations/{invitationId}/refuse';

  /**
   * Từ chối lời mời.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationRefuseInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopInvitationRefuseInvitation$Response(params: ShopInvitationRefuseInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopInvitationRefuseInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Từ chối lời mời.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationRefuseInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopInvitationRefuseInvitation(params: ShopInvitationRefuseInvitation$Params, context?: HttpContext): Observable<void> {
    return this.shopInvitationRefuseInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopInvitationAcceptAllInvitation()` */
  static readonly ShopInvitationAcceptAllInvitationPath = '/api/v1/invitations/accept-all';

  /**
   * Đồng ý tất cả lời mời của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationAcceptAllInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationAcceptAllInvitation$Response(params?: ShopInvitationAcceptAllInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopInvitationAcceptAllInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Đồng ý tất cả lời mời của user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationAcceptAllInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopInvitationAcceptAllInvitation(params?: ShopInvitationAcceptAllInvitation$Params, context?: HttpContext): Observable<void> {
    return this.shopInvitationAcceptAllInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `shopInvitationRefuseAllInvitation()` */
  static readonly ShopInvitationRefuseAllInvitationPath = '/api/v1/invitations/refuse-all';

  /**
   * Từ chối tất cả lời mời.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopInvitationRefuseAllInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopInvitationRefuseAllInvitation$Response(params: ShopInvitationRefuseAllInvitation$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopInvitationRefuseAllInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Từ chối tất cả lời mời.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopInvitationRefuseAllInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopInvitationRefuseAllInvitation(params: ShopInvitationRefuseAllInvitation$Params, context?: HttpContext): Observable<void> {
    return this.shopInvitationRefuseAllInvitation$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
