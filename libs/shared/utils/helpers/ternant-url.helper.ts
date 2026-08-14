import { WIShopIdentity } from '@wi-mfes/context';

export function buildTenantUrl(
  path: string,
  identity: WIShopIdentity | null
): string {
  let url = path.startsWith('/') ? path.substring(1) : path;
  if (identity) {
    return `/${identity.shopId}/${identity.tenantId}/${url}`;
  }
  return `/${url}`;
}
