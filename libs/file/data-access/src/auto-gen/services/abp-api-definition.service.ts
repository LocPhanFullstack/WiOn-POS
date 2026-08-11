/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBFileBaseService } from '../fnb-file-base-service';
import { FNBFileApiConfiguration, FNBFileApiConfigurationToken } from '../fnb-file-api-configuration';
import { FNBFileStrictHttpResponse } from '../fnb-file-strict-http-response';

import { abpApiDefinitionGet } from '../fn/abp-api-definition/abp-api-definition-get';
import { AbpApiDefinitionGet$Params } from '../fn/abp-api-definition/abp-api-definition-get';
import { ApplicationApiDescriptionModel } from '../models/application-api-description-model';

@Injectable({ providedIn: 'root' })
export class AbpApiDefinitionService extends FNBFileBaseService {
  override config: FNBFileApiConfiguration = inject(FNBFileApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `abpApiDefinitionGet()` */
  static readonly AbpApiDefinitionGetPath = '/api/abp/api-definition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `abpApiDefinitionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  abpApiDefinitionGet$Response(params?: AbpApiDefinitionGet$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<ApplicationApiDescriptionModel>> {
    return abpApiDefinitionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `abpApiDefinitionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  abpApiDefinitionGet(params?: AbpApiDefinitionGet$Params, context?: HttpContext): Observable<ApplicationApiDescriptionModel> {
    return this.abpApiDefinitionGet$Response(params, context).pipe(
      map((r: FNBFileStrictHttpResponse<ApplicationApiDescriptionModel>): ApplicationApiDescriptionModel => r.body)
    );
  }

}
