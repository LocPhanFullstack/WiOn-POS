/* tslint:disable */
/* eslint-disable */
import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from './fnb-account-api-configuration';

/**
 * Base class for services
 */
@Injectable()
export class FNBAccountBaseService {
  protected config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  protected http: HttpClient = inject(HttpClient);

  private _rootUrl?: string | (() => string);

  /**
   * Returns the root url for all operations in this service.
   * If not set directly in this service, will fallback to `FNBAccountApiConfiguration.rootUrl`.
   * Supports both string and function for dynamic values.
   */
  get rootUrl(): string {
    const root = this._rootUrl ?? this.config.rootUrl;

    if (!root) {
      throw new Error('Root URL is not defined ,FNBAccountBaseService.rootUrl or FNBAccountApiConfiguration.rootUrl must be provided.');
    }

    return typeof root === 'function' ? root() : root;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl: string | (() => string)) {
    this._rootUrl = rootUrl;
  }
}
