import { ModuleFederationConfig } from '@nx/webpack';
import sharedConfig from '../../module-federation.base.config';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  exposes: {
    './Routes': 'apps/dashboard/src/app/remote-entry/entry.routes.ts',
  },
  ...sharedConfig,
};

export default config;
