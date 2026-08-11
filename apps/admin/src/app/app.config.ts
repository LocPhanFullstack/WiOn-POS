import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WAuthGuardService, WAuthInterceptorService } from '@wion-fnb/shared';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TDS_BASE_URL_IMAGE } from 'tds-ui/image';
import {
  WI_MF_CONFIG_TOKEN,
  WIMfConfig,
  WIMfConfigService,
} from '@wi-mfes/config';
import { provideFNBAccountApiModule } from '@wion-fnb/account/data-access';
import { TDS_I18N, vi_VN } from 'tds-ui/i18n';

const getGatewayUrl = () => {
  return (
    localStorage.getItem('GATEWAY_URL') ??
    'https://gateway.dev-v1.wionfnb.public.rke.app.dev.tmtco.org'
  );
};
const getBaseUrl = () => {
  return '';
};

export const appConfig: ApplicationConfig = {
  providers: [
    WAuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WAuthInterceptorService,
      multi: true,
    },
    {
      provide: WI_MF_CONFIG_TOKEN,
      useFactory: (service: WIMfConfigService) => {
        const config = service.getManifest();
        if (config && config.default) {
          config.default.gatewayUrl =
            getGatewayUrl() ?? config.default.gatewayUrl;
          config.default.assetsBaseUrl = getBaseUrl();
          config.default.environment = config.default.environment || 'DEV';
          service.setManifest(config);
        }
        return config;
      },
      deps: [WIMfConfigService],
    },
    {
      provide: TDS_BASE_URL_IMAGE,
      useFactory: (defaultConfig: WIMfConfig) => {
        return defaultConfig && defaultConfig['default']
          ? defaultConfig['default'].assetsBaseUrl
          : '';
      },
      deps: [WI_MF_CONFIG_TOKEN],
    },
    { provide: TDS_I18N, useValue: vi_VN },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withHashLocation()
    ),
    provideFNBAccountApiModule({
      useFactory: (service: WIMfConfigService) => ({
        rootUrl: service.createApiConfig('account', 'authentication'),
      }),
      deps: [WIMfConfigService],
    }),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
  ],
};
