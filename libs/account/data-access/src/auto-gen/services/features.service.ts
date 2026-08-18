/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { featuresGet } from '../fn/features/features-get';
import { FeaturesGet$Params } from '../fn/features/features-get';
import { featuresUpdate } from '../fn/features/features-update';
import { FeaturesUpdate$Params } from '../fn/features/features-update';
import { GetFeatureListResultDto } from '../models/get-feature-list-result-dto';

@Injectable()
export class FeaturesService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `featuresGet()` */
  static readonly FeaturesGetPath = '/api/feature-management/features';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featuresGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  featuresGet$Response(params?: FeaturesGet$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<GetFeatureListResultDto>> {
    return featuresGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `featuresGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featuresGet(params?: FeaturesGet$Params, context?: HttpContext): Observable<GetFeatureListResultDto> {
    return this.featuresGet$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<GetFeatureListResultDto>): GetFeatureListResultDto => r.body)
    );
  }

  /** Path part for operation `featuresUpdate()` */
  static readonly FeaturesUpdatePath = '/api/feature-management/features';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featuresUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featuresUpdate$Response(params: FeaturesUpdate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return featuresUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `featuresUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featuresUpdate(params: FeaturesUpdate$Params, context?: HttpContext): Observable<void> {
    return this.featuresUpdate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
