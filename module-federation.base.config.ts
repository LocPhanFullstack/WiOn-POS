import type { ModuleFederationConfig, SharedLibraryConfig } from '@nx/webpack';
export const tdsUiVersion = '18.6.2';
export const sharedConfig: Pick<
  ModuleFederationConfig,
  'shared' | 'additionalShared'
> = {
  shared: (
    libraryName: string,
    defaultConfig: SharedLibraryConfig
  ): SharedLibraryConfig | false => {
    if (!libraryName) {
      return false;
    }

    if (libraryName.startsWith('tds-ui')) {
      return {
        ...defaultConfig,
        singleton: true,
        eager: true,
        requiredVersion: tdsUiVersion,
        strictVersion: true,
      };
    }

    if (libraryName.startsWith('@angular')) {
      return {
        ...defaultConfig,
        singleton: true,
        eager: true,
        requiredVersion: false,
        strictVersion: true,
      };
    }

    if (libraryName.startsWith('@wi-mfes/')) {
      return {
        ...defaultConfig,
        singleton: true,
        eager: true,
        requiredVersion: false,
        strictVersion: false,
      };
    }

    if (libraryName.startsWith('@wion-fnb/')) {
      return {
        ...defaultConfig,
        singleton: true,
        eager: true,
        requiredVersion: false,
        strictVersion: false,
      };
    }

    return false;
  },
};

export default sharedConfig;
