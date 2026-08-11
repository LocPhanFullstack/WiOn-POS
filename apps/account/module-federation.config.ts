import { ModuleFederationConfig } from '@nx/webpack';
import sharedConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'account',
  exposes: {
    './Routes': 'apps/account/src/app/remote-entry/entry.routes.ts',
  },
  ...sharedConfig
};

export default config;
