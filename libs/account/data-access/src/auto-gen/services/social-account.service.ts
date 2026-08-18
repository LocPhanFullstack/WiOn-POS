/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { socialAccountAuthentication } from '../fn/social-account/social-account-authentication';
import { SocialAccountAuthentication$Params } from '../fn/social-account/social-account-authentication';
import { SocialAccountSignInDto } from '../models/social-account-sign-in-dto';

@Injectable()
export class SocialAccountService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `socialAccountAuthentication()` */
  static readonly SocialAccountAuthenticationPath = '/api/v1/social-account/authentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `socialAccountAuthentication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  socialAccountAuthentication$Response(params: SocialAccountAuthentication$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<SocialAccountSignInDto>> {
    return socialAccountAuthentication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `socialAccountAuthentication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  socialAccountAuthentication(params: SocialAccountAuthentication$Params, context?: HttpContext): Observable<SocialAccountSignInDto> {
    return this.socialAccountAuthentication$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<SocialAccountSignInDto>): SocialAccountSignInDto => r.body)
    );
  }

}
