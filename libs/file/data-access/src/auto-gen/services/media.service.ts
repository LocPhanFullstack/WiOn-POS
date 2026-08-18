/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBFileBaseService } from '../fnb-file-base-service';
import { FNBFileApiConfiguration, FNBFileApiConfigurationToken } from '../fnb-file-api-configuration';
import { FNBFileStrictHttpResponse } from '../fnb-file-strict-http-response';

import { ImageDto } from '../models/image-dto';
import { mediaAvatarUpload } from '../fn/media/media-avatar-upload';
import { MediaAvatarUpload$Params } from '../fn/media/media-avatar-upload';
import { mediaGetListImage } from '../fn/media/media-get-list-image';
import { MediaGetListImage$Params } from '../fn/media/media-get-list-image';
import { mediaGetListPagedAndFiltered } from '../fn/media/media-get-list-paged-and-filtered';
import { MediaGetListPagedAndFiltered$Params } from '../fn/media/media-get-list-paged-and-filtered';
import { mediaGetVideo } from '../fn/media/media-get-video';
import { MediaGetVideo$Params } from '../fn/media/media-get-video';
import { MediaPagedAndFilteredResultDto } from '../models/media-paged-and-filtered-result-dto';

@Injectable()
export class MediaService extends FNBFileBaseService {
  override config: FNBFileApiConfiguration = inject(FNBFileApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `mediaGetVideo()` */
  static readonly MediaGetVideoPath = '/api/v1/media/get-video-stream/{mediaId}';

  /**
   * Get video stream bằng MediaId.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mediaGetVideo()` instead.
   *
   * This method doesn't expect any request body.
   */
  mediaGetVideo$Response(params: MediaGetVideo$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return mediaGetVideo(this.http, this.rootUrl, params, context);
  }

  /**
   * Get video stream bằng MediaId.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mediaGetVideo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mediaGetVideo(params: MediaGetVideo$Params, context?: HttpContext): Observable<void> {
    return this.mediaGetVideo$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `mediaAvatarUpload()` */
  static readonly MediaAvatarUploadPath = '/api/v1/media/avatar';

  /**
   * Upload avatar for shop, user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mediaAvatarUpload()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  mediaAvatarUpload$Response(params?: MediaAvatarUpload$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<string>> {
    return mediaAvatarUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload avatar for shop, user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mediaAvatarUpload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  mediaAvatarUpload(params?: MediaAvatarUpload$Params, context?: HttpContext): Observable<string> {
    return this.mediaAvatarUpload$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `mediaGetListImage()` */
  static readonly MediaGetListImagePath = '/api/v1/media/images';

  /**
   * Get list hình ảnh.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mediaGetListImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  mediaGetListImage$Response(params?: MediaGetListImage$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<Array<ImageDto>>> {
    return mediaGetListImage(this.http, this.rootUrl, params, context);
  }

  /**
   * Get list hình ảnh.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mediaGetListImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mediaGetListImage(params?: MediaGetListImage$Params, context?: HttpContext): Observable<Array<ImageDto>> {
    return this.mediaGetListImage$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<Array<ImageDto>>): Array<ImageDto> => r.body)
    );
  }

  /** Path part for operation `mediaGetListPagedAndFiltered()` */
  static readonly MediaGetListPagedAndFilteredPath = '/api/v1/media/paged-and-filtered';

  /**
   * get list media sử dụng bộ lọc và filter.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mediaGetListPagedAndFiltered()` instead.
   *
   * This method doesn't expect any request body.
   */
  mediaGetListPagedAndFiltered$Response(params?: MediaGetListPagedAndFiltered$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<MediaPagedAndFilteredResultDto>> {
    return mediaGetListPagedAndFiltered(this.http, this.rootUrl, params, context);
  }

  /**
   * get list media sử dụng bộ lọc và filter.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mediaGetListPagedAndFiltered$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mediaGetListPagedAndFiltered(params?: MediaGetListPagedAndFiltered$Params, context?: HttpContext): Observable<MediaPagedAndFilteredResultDto> {
    return this.mediaGetListPagedAndFiltered$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<MediaPagedAndFilteredResultDto>): MediaPagedAndFilteredResultDto => r.body)
    );
  }

}
