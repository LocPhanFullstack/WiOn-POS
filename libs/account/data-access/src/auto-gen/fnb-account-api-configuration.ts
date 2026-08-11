/* tslint:disable */
/* eslint-disable */
import { InjectionToken } from '@angular/core';

/**
 * Global configuration
 */
export class FNBAccountApiConfiguration {
 rootUrl?: string | (() => string);
}

/**
 * DI token for FNBAccountApiConfiguration
 */
export const FNBAccountApiConfigurationToken = new InjectionToken<FNBAccountApiConfiguration>('FNBAccountApiConfiguration');

/**
 * Parameters for `FNBAccountApiModule.forRoot()`
 */
export interface FNBAccountApiConfigurationParams {
 rootUrl?: string | (() => string);
}
