/* tslint:disable */
/* eslint-disable */
import { ProviderInfoDto } from '../models/provider-info-dto';
export interface PermissionGrantInfoDto {
  allowedProviders?: Array<string> | null;
  displayName?: string | null;
  grantedProviders?: Array<ProviderInfoDto> | null;
  isGranted?: boolean;
  name?: string | null;
  parentName?: string | null;
}
