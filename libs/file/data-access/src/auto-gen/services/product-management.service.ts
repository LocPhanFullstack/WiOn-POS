/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBFileBaseService } from '../fnb-file-base-service';
import { FNBFileApiConfiguration, FNBFileApiConfigurationToken } from '../fnb-file-api-configuration';
import { FNBFileStrictHttpResponse } from '../fnb-file-strict-http-response';

import { ProductImageDefaultUploadResultDto } from '../models/product-image-default-upload-result-dto';
import { ProductImageUploadResultDto } from '../models/product-image-upload-result-dto';
import { productManagementProductImageDefaultUpload } from '../fn/product-management/product-management-product-image-default-upload';
import { ProductManagementProductImageDefaultUpload$Params } from '../fn/product-management/product-management-product-image-default-upload';
import { productManagementProductImageUpload } from '../fn/product-management/product-management-product-image-upload';
import { ProductManagementProductImageUpload$Params } from '../fn/product-management/product-management-product-image-upload';
import { productManagementProductVideoDefaultUpload } from '../fn/product-management/product-management-product-video-default-upload';
import { ProductManagementProductVideoDefaultUpload$Params } from '../fn/product-management/product-management-product-video-default-upload';
import { productManagementProductVideoUpload } from '../fn/product-management/product-management-product-video-upload';
import { ProductManagementProductVideoUpload$Params } from '../fn/product-management/product-management-product-video-upload';
import { productManagementSuggestProductByMediaId } from '../fn/product-management/product-management-suggest-product-by-media-id';
import { ProductManagementSuggestProductByMediaId$Params } from '../fn/product-management/product-management-suggest-product-by-media-id';
import { ProductVideoDefaultUploadResultDto } from '../models/product-video-default-upload-result-dto';
import { ProductVideoUploadResultDto } from '../models/product-video-upload-result-dto';
import { SuggestProductNameResultDto } from '../models/suggest-product-name-result-dto';

@Injectable()
export class ProductManagementService extends FNBFileBaseService {
  override config: FNBFileApiConfiguration = inject(FNBFileApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `productManagementProductImageUpload()` */
  static readonly ProductManagementProductImageUploadPath = '/api/v1/product-management/product-upload-image';

  /**
   * upload hình ảnh cho sản phẩm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productManagementProductImageUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductImageUpload$Response(params?: ProductManagementProductImageUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductImageUploadResultDto>> {
    return productManagementProductImageUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * upload hình ảnh cho sản phẩm.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productManagementProductImageUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductImageUpload(params?: ProductManagementProductImageUpload$Params, context?: HttpContext): Observable<ProductImageUploadResultDto> {
    return this.productManagementProductImageUpload$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<ProductImageUploadResultDto>): ProductImageUploadResultDto => r.body)
    );
  }

  /** Path part for operation `productManagementProductVideoUpload()` */
  static readonly ProductManagementProductVideoUploadPath = '/api/v1/product-management/product-upload-video';

  /**
   * upload video cho sản phẩm.
   *
   * - Khi upload video, nếu không truyền thumbnail thì video này sẽ không có thumbnail.
   * - Tuy nhiên, khi quá trình upload thumbnail bị lỗi, video vẫn được upload mà không có thumbnail.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productManagementProductVideoUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductVideoUpload$Response(params?: ProductManagementProductVideoUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductVideoUploadResultDto>> {
    return productManagementProductVideoUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * upload video cho sản phẩm.
   *
   * - Khi upload video, nếu không truyền thumbnail thì video này sẽ không có thumbnail.
   * - Tuy nhiên, khi quá trình upload thumbnail bị lỗi, video vẫn được upload mà không có thumbnail.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productManagementProductVideoUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductVideoUpload(params?: ProductManagementProductVideoUpload$Params, context?: HttpContext): Observable<ProductVideoUploadResultDto> {
    return this.productManagementProductVideoUpload$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<ProductVideoUploadResultDto>): ProductVideoUploadResultDto => r.body)
    );
  }

  /** Path part for operation `productManagementProductImageDefaultUpload()` */
  static readonly ProductManagementProductImageDefaultUploadPath = '/api/v1/product-management/product-upload-image-default';

  /**
   * upload hình ảnh đại diện cho sản phẩm.
   *
   * - Tải hình ảnh đại diện cho sản phẩm
   * - AI sẽ đề xuất tên cho sản phẩm này (Nếu ai đề xuất có vấn đề, hình ảnh vẫn được upload, danh sách tên sản phẩm đề xuất = null)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productManagementProductImageDefaultUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductImageDefaultUpload$Response(params?: ProductManagementProductImageDefaultUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductImageDefaultUploadResultDto>> {
    return productManagementProductImageDefaultUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * upload hình ảnh đại diện cho sản phẩm.
   *
   * - Tải hình ảnh đại diện cho sản phẩm
   * - AI sẽ đề xuất tên cho sản phẩm này (Nếu ai đề xuất có vấn đề, hình ảnh vẫn được upload, danh sách tên sản phẩm đề xuất = null)
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productManagementProductImageDefaultUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductImageDefaultUpload(params?: ProductManagementProductImageDefaultUpload$Params, context?: HttpContext): Observable<ProductImageDefaultUploadResultDto> {
    return this.productManagementProductImageDefaultUpload$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<ProductImageDefaultUploadResultDto>): ProductImageDefaultUploadResultDto => r.body)
    );
  }

  /** Path part for operation `productManagementSuggestProductByMediaId()` */
  static readonly ProductManagementSuggestProductByMediaIdPath = '/api/v1/product-management/suggest-by-mediaId';

  /**
   * gợi ý tên sản phẩm bằng media id có sẵn.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productManagementSuggestProductByMediaId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productManagementSuggestProductByMediaId$Response(params: ProductManagementSuggestProductByMediaId$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<SuggestProductNameResultDto>> {
    return productManagementSuggestProductByMediaId(this.http, this.rootUrl, params, context);
  }

  /**
   * gợi ý tên sản phẩm bằng media id có sẵn.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productManagementSuggestProductByMediaId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productManagementSuggestProductByMediaId(params: ProductManagementSuggestProductByMediaId$Params, context?: HttpContext): Observable<SuggestProductNameResultDto> {
    return this.productManagementSuggestProductByMediaId$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<SuggestProductNameResultDto>): SuggestProductNameResultDto => r.body)
    );
  }

  /** Path part for operation `productManagementProductVideoDefaultUpload()` */
  static readonly ProductManagementProductVideoDefaultUploadPath = '/api/v1/product-management/product-upload-video-default';

  /**
   * upload video kèm gợi ý tên sản phẩm bằng thumbnail.
   *
   * - Tải hình ảnh đại diện cho sản phẩm
   * - AI sẽ đề xuất tên cho sản phẩm này (Nếu ai đề xuất có vấn đề, hình ảnh vẫn được upload, danh sách tên sản phẩm đề xuất = null)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productManagementProductVideoDefaultUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductVideoDefaultUpload$Response(params?: ProductManagementProductVideoDefaultUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ProductVideoDefaultUploadResultDto>> {
    return productManagementProductVideoDefaultUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * upload video kèm gợi ý tên sản phẩm bằng thumbnail.
   *
   * - Tải hình ảnh đại diện cho sản phẩm
   * - AI sẽ đề xuất tên cho sản phẩm này (Nếu ai đề xuất có vấn đề, hình ảnh vẫn được upload, danh sách tên sản phẩm đề xuất = null)
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productManagementProductVideoDefaultUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productManagementProductVideoDefaultUpload(params?: ProductManagementProductVideoDefaultUpload$Params, context?: HttpContext): Observable<ProductVideoDefaultUploadResultDto> {
    return this.productManagementProductVideoDefaultUpload$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<ProductVideoDefaultUploadResultDto>): ProductVideoDefaultUploadResultDto => r.body)
    );
  }

}
