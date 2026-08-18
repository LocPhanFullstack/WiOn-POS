/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { businessCreate } from '../fn/business/business-create';
import { BusinessCreate$Params } from '../fn/business/business-create';
import { businessDelete } from '../fn/business/business-delete';
import { BusinessDelete$Params } from '../fn/business/business-delete';
import { BusinessDto } from '../models/business-dto';
import { businessGenerateBusiness } from '../fn/business/business-generate-business';
import { BusinessGenerateBusiness$Params } from '../fn/business/business-generate-business';
import { businessGet } from '../fn/business/business-get';
import { BusinessGet$Params } from '../fn/business/business-get';
import { businessGetCurrentlyLoggedInBusiness } from '../fn/business/business-get-currently-logged-in-business';
import { BusinessGetCurrentlyLoggedInBusiness$Params } from '../fn/business/business-get-currently-logged-in-business';
import { businessGetList } from '../fn/business/business-get-list';
import { BusinessGetList$Params } from '../fn/business/business-get-list';
import { businessGetShopInitializationStatus } from '../fn/business/business-get-shop-initialization-status';
import { BusinessGetShopInitializationStatus$Params } from '../fn/business/business-get-shop-initialization-status';
import { BusinessIdDto } from '../models/business-id-dto';
import { businessSeedRolesPermissions } from '../fn/business/business-seed-roles-permissions';
import { BusinessSeedRolesPermissions$Params } from '../fn/business/business-seed-roles-permissions';
import { businessUpdate } from '../fn/business/business-update';
import { BusinessUpdate$Params } from '../fn/business/business-update';
import { businessUpdateAvatar } from '../fn/business/business-update-avatar';
import { BusinessUpdateAvatar$Params } from '../fn/business/business-update-avatar';
import { businessUpdateShopData } from '../fn/business/business-update-shop-data';
import { BusinessUpdateShopData$Params } from '../fn/business/business-update-shop-data';
import { InitializationStatusDto } from '../models/initialization-status-dto';
import { PagedResultDtoOfBusinessListItemDto } from '../models/paged-result-dto-of-business-list-item-dto';

@Injectable()
export class BusinessService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `businessGetList()` */
  static readonly BusinessGetListPath = '/api/v1/businesses';

  /**
   * Lấy danh sách doanh nghiệp.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGetList$Response(params?: BusinessGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfBusinessListItemDto>> {
    return businessGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách doanh nghiệp.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGetList(params?: BusinessGetList$Params, context?: HttpContext): Observable<PagedResultDtoOfBusinessListItemDto> {
    return this.businessGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<PagedResultDtoOfBusinessListItemDto>): PagedResultDtoOfBusinessListItemDto => r.body)
    );
  }

  /** Path part for operation `businessCreate()` */
  static readonly BusinessCreatePath = '/api/v1/businesses';

  /**
   * Tạo doanh nghiệp.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessCreate$Response(params: BusinessCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<BusinessIdDto>> {
    return businessCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo doanh nghiệp.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessCreate(params: BusinessCreate$Params, context?: HttpContext): Observable<BusinessIdDto> {
    return this.businessCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<BusinessIdDto>): BusinessIdDto => r.body)
    );
  }

  /** Path part for operation `businessGetCurrentlyLoggedInBusiness()` */
  static readonly BusinessGetCurrentlyLoggedInBusinessPath = '/api/v1/businesses/current';

  /**
   * Lấy doanh nghiệp đăng nhập hiện tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessGetCurrentlyLoggedInBusiness()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGetCurrentlyLoggedInBusiness$Response(params?: BusinessGetCurrentlyLoggedInBusiness$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<BusinessDto>> {
    return businessGetCurrentlyLoggedInBusiness(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy doanh nghiệp đăng nhập hiện tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessGetCurrentlyLoggedInBusiness$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGetCurrentlyLoggedInBusiness(params?: BusinessGetCurrentlyLoggedInBusiness$Params, context?: HttpContext): Observable<BusinessDto> {
    return this.businessGetCurrentlyLoggedInBusiness$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<BusinessDto>): BusinessDto => r.body)
    );
  }

  /** Path part for operation `businessGet()` */
  static readonly BusinessGetPath = '/api/v1/businesses/{id}';

  /**
   * Xem doanh nghiệp theo Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGet$Response(params: BusinessGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<BusinessDto>> {
    return businessGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Xem doanh nghiệp theo Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGet(params: BusinessGet$Params, context?: HttpContext): Observable<BusinessDto> {
    return this.businessGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<BusinessDto>): BusinessDto => r.body)
    );
  }

  /** Path part for operation `businessUpdate()` */
  static readonly BusinessUpdatePath = '/api/v1/businesses/{id}';

  /**
   * Sửa doanh nghiệp.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessUpdate$Response(params: BusinessUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return businessUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Sửa doanh nghiệp.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessUpdate(params: BusinessUpdate$Params, context?: HttpContext): Observable<void> {
    return this.businessUpdate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `businessDelete()` */
  static readonly BusinessDeletePath = '/api/v1/businesses/{id}';

  /**
   * Xóa doanh nghiệp.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessDelete$Response(params: BusinessDelete$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return businessDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa doanh nghiệp.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessDelete(params: BusinessDelete$Params, context?: HttpContext): Observable<void> {
    return this.businessDelete$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `businessGetShopInitializationStatus()` */
  static readonly BusinessGetShopInitializationStatusPath = '/api/v1/businesses/{id}/initialization-status';

  /**
   * Xem trạng thái khởi tạo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessGetShopInitializationStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGetShopInitializationStatus$Response(params: BusinessGetShopInitializationStatus$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<InitializationStatusDto>> {
    return businessGetShopInitializationStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * Xem trạng thái khởi tạo.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessGetShopInitializationStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGetShopInitializationStatus(params: BusinessGetShopInitializationStatus$Params, context?: HttpContext): Observable<InitializationStatusDto> {
    return this.businessGetShopInitializationStatus$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<InitializationStatusDto>): InitializationStatusDto => r.body)
    );
  }

  /** Path part for operation `businessUpdateAvatar()` */
  static readonly BusinessUpdateAvatarPath = '/api/v1/businesses/{id}/avatar';

  /**
   * Cập nhật hình đại diện.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessUpdateAvatar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessUpdateAvatar$Response(params: BusinessUpdateAvatar$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return businessUpdateAvatar(this.http, this.rootUrl, params, context);
  }

  /**
   * Cập nhật hình đại diện.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessUpdateAvatar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessUpdateAvatar(params: BusinessUpdateAvatar$Params, context?: HttpContext): Observable<void> {
    return this.businessUpdateAvatar$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `businessGenerateBusiness()` */
  static readonly BusinessGenerateBusinessPath = '/api/v1/businesses/generate';

  /**
   * Khởi tạo doanh nghiệp cho cửa hàng cũ chuyển qua.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessGenerateBusiness()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGenerateBusiness$Response(params?: BusinessGenerateBusiness$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<number>>> {
    return businessGenerateBusiness(this.http, this.rootUrl, params, context);
  }

  /**
   * Khởi tạo doanh nghiệp cho cửa hàng cũ chuyển qua.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessGenerateBusiness$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessGenerateBusiness(params?: BusinessGenerateBusiness$Params, context?: HttpContext): Observable<Array<number>> {
    return this.businessGenerateBusiness$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

  /** Path part for operation `businessSeedRolesPermissions()` */
  static readonly BusinessSeedRolesPermissionsPath = '/api/v1/businesses/seed-roles-permissions';

  /**
   * Bổ sung vai trò/quyền còn thiếu cho các cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessSeedRolesPermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessSeedRolesPermissions$Response(params?: BusinessSeedRolesPermissions$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<number>>> {
    return businessSeedRolesPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * Bổ sung vai trò/quyền còn thiếu cho các cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessSeedRolesPermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  businessSeedRolesPermissions(params?: BusinessSeedRolesPermissions$Params, context?: HttpContext): Observable<Array<number>> {
    return this.businessSeedRolesPermissions$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

  /** Path part for operation `businessUpdateShopData()` */
  static readonly BusinessUpdateShopDataPath = '/api/v1/businesses/update-shop-data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `businessUpdateShopData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessUpdateShopData$Response(params: BusinessUpdateShopData$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return businessUpdateShopData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `businessUpdateShopData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  businessUpdateShopData(params: BusinessUpdateShopData$Params, context?: HttpContext): Observable<void> {
    return this.businessUpdateShopData$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
