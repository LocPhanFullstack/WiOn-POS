/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { abpApplicationConfigurationGet } from '../fn/abp-application-configuration/abp-application-configuration-get';
import { AbpApplicationConfigurationGet$Params } from '../fn/abp-application-configuration/abp-application-configuration-get';
import { ApplicationConfigurationDto } from '../models/application-configuration-dto';

@Injectable()
export class AbpApplicationConfigurationService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `abpApplicationConfigurationGet()` */
  static readonly AbpApplicationConfigurationGetPath = '/api/abp/application-configuration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `abpApplicationConfigurationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  abpApplicationConfigurationGet$Response(params?: AbpApplicationConfigurationGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<ApplicationConfigurationDto>> {
    return abpApplicationConfigurationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `abpApplicationConfigurationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  abpApplicationConfigurationGet(params?: AbpApplicationConfigurationGet$Params, context?: HttpContext): Observable<ApplicationConfigurationDto> {
    return this.abpApplicationConfigurationGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<ApplicationConfigurationDto>): ApplicationConfigurationDto => r.body)
    );
  }

}
