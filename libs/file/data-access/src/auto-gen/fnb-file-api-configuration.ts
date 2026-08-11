/* tslint:disable */
/* eslint-disable */
import { InjectionToken } from '@angular/core';

/**
 * Global configuration
 */
export class FNBFileApiConfiguration {
 rootUrl?: string | (() => string);
}

/**
 * DI token for FNBFileApiConfiguration
 */
export const FNBFileApiConfigurationToken = new InjectionToken<FNBFileApiConfiguration>('FNBFileApiConfiguration');

/**
 * Parameters for `FNBFileApiModule.forRoot()`
 */
export interface FNBFileApiConfigurationParams {
 rootUrl?: string | (() => string);
}
