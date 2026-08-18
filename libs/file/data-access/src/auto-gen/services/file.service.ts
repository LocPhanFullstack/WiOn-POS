/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBFileBaseService } from '../fnb-file-base-service';
import { FNBFileApiConfiguration, FNBFileApiConfigurationToken } from '../fnb-file-api-configuration';
import { FNBFileStrictHttpResponse } from '../fnb-file-strict-http-response';

import { fileDeleteWithUrlProxy } from '../fn/file/file-delete-with-url-proxy';
import { FileDeleteWithUrlProxy$Params } from '../fn/file/file-delete-with-url-proxy';

@Injectable()
export class FileService extends FNBFileBaseService {
  override config: FNBFileApiConfiguration = inject(FNBFileApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `fileDeleteWithUrlProxy()` */
  static readonly FileDeleteWithUrlProxyPath = '/api/v1/file/delete-with-url-proxy';

  /**
   * delete hình ảnh bằng url proxy.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileDeleteWithUrlProxy()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileDeleteWithUrlProxy$Response(params: FileDeleteWithUrlProxy$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<void>> {
    return fileDeleteWithUrlProxy(this.http, this.rootUrl, params, context);
  }

  /**
   * delete hình ảnh bằng url proxy.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileDeleteWithUrlProxy$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileDeleteWithUrlProxy(params: FileDeleteWithUrlProxy$Params, context?: HttpContext): Observable<void> {
    return this.fileDeleteWithUrlProxy$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<void>): void => r.body)
    );
  }

}
