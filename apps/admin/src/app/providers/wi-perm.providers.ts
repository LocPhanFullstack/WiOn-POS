import { WI_PERMISSION_CONTEXT } from '@wi-mfes/perm';
import { WPShopPermissionService } from '@wion-fnb/shared/utils';

export const provideWiPermissions = () => [
  {
    provide: WI_PERMISSION_CONTEXT,
    useFactory: (perm: WPShopPermissionService) => ({
      check: (module: string, action: string) =>
        perm.checkPermission(module, action),
      checkAny: (module: string, actions: string[]) =>
        actions.some((a) => perm.checkPermission(module, a)),
      checkAll: (module: string, actions: string[]) =>
        actions.every((a) => perm.checkPermission(module, a)),
      permissions$: perm.getListPermission(),
    }),
    deps: [WPShopPermissionService],
  },
];
