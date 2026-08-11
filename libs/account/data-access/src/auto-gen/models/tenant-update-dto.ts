/* tslint:disable */
/* eslint-disable */
import { TenantCreateOrUpdateDtoBase } from '../models/tenant-create-or-update-dto-base';
export type TenantUpdateDto = TenantCreateOrUpdateDtoBase & {
'concurrencyStamp'?: string | null;
};
