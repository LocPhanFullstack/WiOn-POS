/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { abpApiDefinitionGet } from '../fn/abp-api-definition/abp-api-definition-get';
import { AbpApiDefinitionGet$Params } from '../fn/abp-api-definition/abp-api-definition-get';
import { ApplicationApiDescriptionModel } from '../models/application-api-description-model';

@Injectable()
export class AbpApiDefinitionService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `abpApiDefinitionGet()` */
  static readonly AbpApiDefinitionGetPath = '/api/abp/api-definition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `abpApiDefinitionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  abpApiDefinitionGet$Response(params?: AbpApiDefinitionGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ApplicationApiDescriptionModel>> {
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
      map((r: FNBAccountStrictHttpResponse<ApplicationApiDescriptionModel>): ApplicationApiDescriptionModel => r.body)
    );
  }

}
