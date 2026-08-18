/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { AllUserShopListDto } from '../models/all-user-shop-list-dto';
import { PagedResultDtoOfShopDto } from '../models/paged-result-dto-of-shop-dto';
import { shopCreate } from '../fn/shop/shop-create';
import { ShopCreate$Params } from '../fn/shop/shop-create';
import { ShopDto } from '../models/shop-dto';
import { shopGet } from '../fn/shop/shop-get';
import { ShopGet$Params } from '../fn/shop/shop-get';
import { shopGetAllUserShopList } from '../fn/shop/shop-get-all-user-shop-list';
import { ShopGetAllUserShopList$Params } from '../fn/shop/shop-get-all-user-shop-list';
import { shopGetById } from '../fn/shop/shop-get-by-id';
import { ShopGetById$Params } from '../fn/shop/shop-get-by-id';
import { shopGetList } from '../fn/shop/shop-get-list';
import { ShopGetList$Params } from '../fn/shop/shop-get-list';
import { shopGetShopsOfCurrentBusiness } from '../fn/shop/shop-get-shops-of-current-business';
import { ShopGetShopsOfCurrentBusiness$Params } from '../fn/shop/shop-get-shops-of-current-business';
import { ShopIdDto } from '../models/shop-id-dto';
import { shopUpdate } from '../fn/shop/shop-update';
import { ShopUpdate$Params } from '../fn/shop/shop-update';

@Injectable()
export class ShopService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `shopGetList()` */
  static readonly ShopGetListPath = '/api/v1/shops';

  /**
   * Lấy danh sách cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetList$Response(params?: ShopGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfShopDto>> {
    return shopGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetList(params?: ShopGetList$Params, context?: HttpContext): Observable<PagedResultDtoOfShopDto> {
    return this.shopGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<PagedResultDtoOfShopDto>): PagedResultDtoOfShopDto => r.body)
    );
  }

  /** Path part for operation `shopCreate()` */
  static readonly ShopCreatePath = '/api/v1/shops';

  /**
   * Tạo cửa hàng.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopCreate$Response(params: ShopCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopIdDto>> {
    return shopCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Tạo cửa hàng.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopCreate(params: ShopCreate$Params, context?: HttpContext): Observable<ShopIdDto> {
    return this.shopCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopIdDto>): ShopIdDto => r.body)
    );
  }

  /** Path part for operation `shopGetAllUserShopList()` */
  static readonly ShopGetAllUserShopListPath = '/api/v1/shops/all';

  /**
   * Lấy danh sách tất cả cửa hàng của người dùng đang có (có thể đăng nhập và bị khóa).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopGetAllUserShopList()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetAllUserShopList$Response(params?: ShopGetAllUserShopList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<AllUserShopListDto>> {
    return shopGetAllUserShopList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách tất cả cửa hàng của người dùng đang có (có thể đăng nhập và bị khóa).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopGetAllUserShopList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetAllUserShopList(params?: ShopGetAllUserShopList$Params, context?: HttpContext): Observable<AllUserShopListDto> {
    return this.shopGetAllUserShopList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<AllUserShopListDto>): AllUserShopListDto => r.body)
    );
  }

  /** Path part for operation `shopGetShopsOfCurrentBusiness()` */
  static readonly ShopGetShopsOfCurrentBusinessPath = '/api/v1/shops/current-business';

  /**
   * Lấy danh sách cửa hàng của doanh nghiệp hiện tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopGetShopsOfCurrentBusiness()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetShopsOfCurrentBusiness$Response(params?: ShopGetShopsOfCurrentBusiness$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<PagedResultDtoOfShopDto>> {
    return shopGetShopsOfCurrentBusiness(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách cửa hàng của doanh nghiệp hiện tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopGetShopsOfCurrentBusiness$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetShopsOfCurrentBusiness(params?: ShopGetShopsOfCurrentBusiness$Params, context?: HttpContext): Observable<PagedResultDtoOfShopDto> {
    return this.shopGetShopsOfCurrentBusiness$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<PagedResultDtoOfShopDto>): PagedResultDtoOfShopDto => r.body)
    );
  }

  /** Path part for operation `shopGet()` */
  static readonly ShopGetPath = '/api/v1/shops/current';

  /**
   * Lấy thông tin cửa hàng hiện tại.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGet$Response(params?: ShopGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopDto>> {
    return shopGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin cửa hàng hiện tại.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGet(params?: ShopGet$Params, context?: HttpContext): Observable<ShopDto> {
    return this.shopGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopDto>): ShopDto => r.body)
    );
  }

  /** Path part for operation `shopGetById()` */
  static readonly ShopGetByIdPath = '/api/v1/shops/{id}';

  /**
   * Lấy thông tin cửa hàng theo Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetById$Response(params: ShopGetById$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ShopDto>> {
    return shopGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin cửa hàng theo Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  shopGetById(params: ShopGetById$Params, context?: HttpContext): Observable<ShopDto> {
    return this.shopGetById$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ShopDto>): ShopDto => r.body)
    );
  }

  /** Path part for operation `shopUpdate()` */
  static readonly ShopUpdatePath = '/api/v1/shops/{id}';

  /**
   * Cập nhật thông tin cửa hàng theo Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `shopUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopUpdate$Response(params: ShopUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return shopUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Cập nhật thông tin cửa hàng theo Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `shopUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  shopUpdate(params: ShopUpdate$Params, context?: HttpContext): Observable<void> {
    return this.shopUpdate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
