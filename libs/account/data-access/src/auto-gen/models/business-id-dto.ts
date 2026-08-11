/* tslint:disable */
/* eslint-disable */
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
export type BusinessIdDto = EntityDtoOfLong & {

/**
 * Id cửa hàng đầu tiên.
 */
'firstShopId'?: number;

/**
 * Id tenant
 */
'tenantId'?: string | null;
};
