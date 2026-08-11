/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional, Provider, FactoryProvider, ValueProvider, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FNBFileApiConfiguration, FNBFileApiConfigurationParams, FNBFileApiConfigurationToken } from './fnb-file-api-configuration';

import { SampleService } from './services/sample.service';
import { CustomerManagementService } from './services/customer-management.service';
import { FileService } from './services/file.service';
import { MediaService } from './services/media.service';
import { ProductManagementService } from './services/product-management.service';
import { AbpApplicationConfigurationService } from './services/abp-application-configuration.service';
import { AbpApiDefinitionService } from './services/abp-api-definition.service';
/**
 * All API services
 */
export const FNBFileApiModuleServices: Provider[] = [
  SampleService,
    CustomerManagementService,
    FileService,
    MediaService,
    ProductManagementService,
    AbpApplicationConfigurationService,
    AbpApiDefinitionService,
    FNBFileApiConfiguration
];

/**
 * Flexible config type (support dynamic rootUrl)
 */
export type FNBFileApiModuleConfig =
  Partial<{
    [K in keyof FNBFileApiConfiguration]:
      FNBFileApiConfiguration[K] | (() => FNBFileApiConfiguration[K]);
  }>;

/**
 * Config input type
 */
export type FNBFileApiModuleConfigInput =
  | FNBFileApiModuleConfig
  | {
      useFactory: (...args: any[]) => FNBFileApiModuleConfig;
      deps?: any[];
    };
/**
 * Create config provider
 */
 export function createFNBFileApiModuleConfigProvider(
  config: FNBFileApiModuleConfigInput
): Provider {

  return (config as any).useFactory
    ? {
        provide: FNBFileApiConfigurationToken,
        useFactory: (config as any).useFactory,
        deps: (config as any).deps || []
      } as FactoryProvider
    : {
        provide: FNBFileApiConfigurationToken,
        useValue: config
      } as ValueProvider;
}

/**
* Cấu hình các provider cho module, bao gồm cả config và các service
*/
 export function createFNBFileApiModuleProviders(
  config: FNBFileApiModuleConfigInput,
  services: Provider[]
): Provider[] {

  const configProvider = (config as any).useFactory
    ? {
        provide: FNBFileApiConfigurationToken,
        useFactory: (config as any).useFactory,
        deps: (config as any).deps || []
      } as FactoryProvider
    : {
        provide: FNBFileApiConfigurationToken,
        useValue: config
      } as ValueProvider;
  return [configProvider, ...services];
}

/**
 * NgModule version
 */
@NgModule()
export class FNBFileApiModule {

  static forRoot(
    config: FNBFileApiModuleConfigInput
  ): ModuleWithProviders<FNBFileApiModule> {

    return {
      ngModule: FNBFileApiModule,
      providers: [
        ...createFNBFileApiModuleProviders(config, FNBFileApiModuleServices)
      ]
    };
  }
}


/**
 *  Cấu hình tất cả các service và config cho module, sử dụng makeEnvironmentProviders
 *  Sử dụng provideFNBFileApiModule trong môi trường standalone để cung cấp các provider cho module 
 */
export function provideFNBFileApiModule(
  config: FNBFileApiModuleConfigInput  
): EnvironmentProviders  {
  return makeEnvironmentProviders([
    createFNBFileApiModuleConfigProvider(config),
    ...FNBFileApiModuleServices
  ]);
}