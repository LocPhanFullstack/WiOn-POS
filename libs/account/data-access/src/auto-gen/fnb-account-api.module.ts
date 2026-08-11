/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional, Provider, ValueProvider, FactoryProvider, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationParams, FNBAccountApiConfigurationToken } from './fnb-account-api-configuration';

import { AccountService } from './services/account.service';
import { BusinessService } from './services/business.service';
import { CategoryService } from './services/category.service';
import { FeedbackService } from './services/feedback.service';
import { FnbPermissionService } from './services/fnb-permission.service';
import { FnbRoleService } from './services/fnb-role.service';
import { FnbShopInvitationService } from './services/fnb-shop-invitation.service';
import { FnbShopUserService } from './services/fnb-shop-user.service';
import { PermissionService } from './services/permission.service';
import { RoleService } from './services/role.service';
import { ShopService } from './services/shop.service';
import { ShopInvitationService } from './services/shop-invitation.service';
import { ShopUserService } from './services/shop-user.service';
import { SignUpService } from './services/sign-up.service';
import { AccountUserService } from './services/account-user.service';
import { RoleManagerService } from './services/role-manager.service';
import { SignInService } from './services/sign-in.service';
import { SocialAccountService } from './services/social-account.service';
import { UserProfileService } from './services/user-profile.service';
import { WiOnPosAccountService } from './services/wi-on-pos-account.service';
import { PermissionsService } from './services/permissions.service';
import { TenantService } from './services/tenant.service';
import { FeaturesService } from './services/features.service';
import { AbpApplicationConfigurationService } from './services/abp-application-configuration.service';
import { AbpApiDefinitionService } from './services/abp-api-definition.service';
/**
 * All API services
 */
export const FNBAccountApiModuleServices: Provider[] = [
  AccountService,
  BusinessService,
  CategoryService,
  FeedbackService,
  FnbPermissionService,
  FnbRoleService,
  FnbShopInvitationService,
  FnbShopUserService,
  PermissionService,
  RoleService,
  ShopService,
  ShopInvitationService,
  ShopUserService,
  SignUpService,
  AccountUserService,
  RoleManagerService,
  SignInService,
  SocialAccountService,
  UserProfileService,
  WiOnPosAccountService,
  PermissionsService,
  TenantService,
  FeaturesService,
  AbpApplicationConfigurationService,
  AbpApiDefinitionService,
  FNBAccountApiConfiguration
];

/**
 * Flexible config type (support dynamic rootUrl)
 */
export type FNBAccountApiModuleConfig =
  Partial<{
    [K in keyof FNBAccountApiConfiguration]:
      FNBAccountApiConfiguration[K] | (() => FNBAccountApiConfiguration[K]);
  }>;

/**
 * Config input type
 */
export type FNBAccountApiModuleConfigInput =
  | FNBAccountApiModuleConfig
  | {
      useFactory: (...args: any[]) => FNBAccountApiModuleConfig;
      deps?: any[];
    };
/**
 * Create config provider
 */
 export function createFNBAccountApiModuleConfigProvider(
  config: FNBAccountApiModuleConfigInput
): Provider {

  return (config as any).useFactory
    ? {
        provide: FNBAccountApiConfigurationToken,
        useFactory: (config as any).useFactory,
        deps: (config as any).deps || []
      } as FactoryProvider
    : {
        provide: FNBAccountApiConfigurationToken,
        useValue: config
      } as ValueProvider;
}

/**
* Cấu hình các provider cho module, bao gồm cả config và các service
*/
 export function createFNBAccountApiModuleProviders(
  config: FNBAccountApiModuleConfigInput,
  services: Provider[]
): Provider[] {

  const configProvider = (config as any).useFactory
    ? {
        provide: FNBAccountApiConfigurationToken,
        useFactory: (config as any).useFactory,
        deps: (config as any).deps || []
      } as FactoryProvider
    : {
        provide: FNBAccountApiConfigurationToken,
        useValue: config
      } as ValueProvider;
  return [configProvider, ...services];
}

/**
 * NgModule version
 */
@NgModule()
export class FNBAccountApiModule {

  static forRoot(
    config: FNBAccountApiModuleConfigInput
  ): ModuleWithProviders<FNBAccountApiModule> {

    return {
      ngModule: FNBAccountApiModule,
      providers: [
        ...createFNBAccountApiModuleProviders(config, FNBAccountApiModuleServices)
      ]
    };
  }
}


/**
 *  Cấu hình tất cả các service và config cho module, sử dụng makeEnvironmentProviders
 *  Sử dụng provideFNBAccountApiModule trong môi trường standalone để cung cấp các provider cho module 
 */
export function provideFNBAccountApiModule(
  config: FNBAccountApiModuleConfigInput  
): EnvironmentProviders  {
  return makeEnvironmentProviders([
    createFNBAccountApiModuleConfigProvider(config),
    ...FNBAccountApiModuleServices
  ]);
}