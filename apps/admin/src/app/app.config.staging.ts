import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withHashLocation } from '@angular/router';
import { appRoutes } from '../app/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WAuthGuardService, WAuthInterceptorService } from '@wion-fnb/shared';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TDS_BASE_URL_IMAGE } from 'tds-ui/image';
import { WI_MF_CONFIG_TOKEN, WIMfConfig, WIMfConfigService } from '@wi-mfes/config';
import { provideFNBAccountApiModule } from '@wion-fnb/account/data-access';

const getGatewayUrl = () => {
  let elem = document.getElementsByTagName("wion-api")[0];
  if (typeof (elem) != 'undefined' && elem != null) {
    return elem.getAttribute('data-api');
  }
  return '';
};
const getBaseUrl = () => {
	let elem = document.getElementsByTagName("wion-assets")[0];
  if (typeof (elem) != 'undefined' && elem != null) {
    const assetsUrl = elem.getAttribute('data-assets');
    if (!!assetsUrl) {
      return assetsUrl + `apps/admin/`;
    }
  }
  return '';
}
export const appConfig: ApplicationConfig = {

  providers: [
    WAuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WAuthInterceptorService,
      multi: true
    },
    {
      provide: WI_MF_CONFIG_TOKEN, useFactory: (service: WIMfConfigService) => {
        const config = service.getManifest();
        if (config && config.default) {
          config.default.gatewayUrl = getGatewayUrl() ?? config.default.gatewayUrl;
          config.default.assetsBaseUrl = getBaseUrl();
          config.default.environment = config.default.environment || 'QA';
          service.setManifest(config);
        }
        return config;
      },
      deps: [WIMfConfigService]
    },
    {
      provide: TDS_BASE_URL_IMAGE, useFactory: (defaultConfig: WIMfConfig) => {
        return defaultConfig && defaultConfig['default'] ? defaultConfig['default'].assetsBaseUrl : '';
      }, deps: [WI_MF_CONFIG_TOKEN]
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation(), withHashLocation()),
    provideFNBAccountApiModule({
      useFactory: (service: WIMfConfigService) => ({
        rootUrl: service.createApiConfig('account', 'authentication')
      }),
      deps: [WIMfConfigService]
    }),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
    )
  ],
};
