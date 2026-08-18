/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBFileBaseService } from '../fnb-file-base-service';
import { FNBFileApiConfiguration, FNBFileApiConfigurationToken } from '../fnb-file-api-configuration';
import { FNBFileStrictHttpResponse } from '../fnb-file-strict-http-response';

import { sampleDelete } from '../fn/sample/sample-delete';
import { SampleDelete$Params } from '../fn/sample/sample-delete';
import { sampleGet } from '../fn/sample/sample-get';
import { SampleGet$Params } from '../fn/sample/sample-get';
import { sampleHead } from '../fn/sample/sample-head';
import { SampleHead$Params } from '../fn/sample/sample-head';
import { sampleOption } from '../fn/sample/sample-option';
import { SampleOption$Params } from '../fn/sample/sample-option';
import { samplePatch } from '../fn/sample/sample-patch';
import { SamplePatch$Params } from '../fn/sample/sample-patch';
import { samplePost } from '../fn/sample/sample-post';
import { SamplePost$Params } from '../fn/sample/sample-post';
import { samplePut } from '../fn/sample/sample-put';
import { SamplePut$Params } from '../fn/sample/sample-put';

@Injectable()
export class SampleService extends FNBFileBaseService {
  override config: FNBFileApiConfiguration = inject(FNBFileApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `sampleGet()` */
  static readonly SampleGetPath = '/api/v1/sample';

  /**
   * Get data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleGet$Response(params?: SampleGet$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return sampleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get data.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleGet(params?: SampleGet$Params, context?: HttpContext): Observable<void> {
    return this.sampleGet$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `samplePut()` */
  static readonly SamplePutPath = '/api/v1/sample';

  /**
   * Edit full data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `samplePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  samplePut$Response(params: SamplePut$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return samplePut(this.http, this.rootUrl, params, context);
  }

  /**
   * Edit full data.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `samplePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  samplePut(params: SamplePut$Params, context?: HttpContext): Observable<void> {
    return this.samplePut$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `samplePost()` */
  static readonly SamplePostPath = '/api/v1/sample';

  /**
   * Create data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `samplePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  samplePost$Response(params: SamplePost$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return samplePost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create data.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `samplePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  samplePost(params: SamplePost$Params, context?: HttpContext): Observable<void> {
    return this.samplePost$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `sampleDelete()` */
  static readonly SampleDeletePath = '/api/v1/sample';

  /**
   * Detele data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sampleDelete$Response(params: SampleDelete$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return sampleDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Detele data.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sampleDelete(params: SampleDelete$Params, context?: HttpContext): Observable<void> {
    return this.sampleDelete$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `sampleOption()` */
  static readonly SampleOptionPath = '/api/v1/sample';

  /**
   * Http Option.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleOption()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleOption$Response(params?: SampleOption$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return sampleOption(this.http, this.rootUrl, params, context);
  }

  /**
   * Http Option.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleOption$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleOption(params?: SampleOption$Params, context?: HttpContext): Observable<void> {
    return this.sampleOption$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `sampleHead()` */
  static readonly SampleHeadPath = '/api/v1/sample';

  /**
   * Http Head.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sampleHead()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleHead$Response(params?: SampleHead$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return sampleHead(this.http, this.rootUrl, params, context);
  }

  /**
   * Http Head.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sampleHead$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sampleHead(params?: SampleHead$Params, context?: HttpContext): Observable<void> {
    return this.sampleHead$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `samplePatch()` */
  static readonly SamplePatchPath = '/api/v1/sample';

  /**
   * Edit partial data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `samplePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  samplePatch$Response(params: SamplePatch$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return samplePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Edit partial data.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `samplePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  samplePatch(params: SamplePatch$Params, context?: HttpContext): Observable<void> {
    return this.samplePatch$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

}
