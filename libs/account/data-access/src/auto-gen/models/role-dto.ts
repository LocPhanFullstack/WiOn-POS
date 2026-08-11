/* tslint:disable */
/* eslint-disable */
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
export type RoleDto = EntityDtoOfLong & {

/**
 * Tên vai trò
 */
'name'?: string | null;

/**
 * Ghi chú
 */
'note'?: string | null;

/**
 * Cờ: Là vai trò mặc định?
 */
'isDefault'?: boolean;

/**
 * Id của tenant
 */
'tenantId'?: string | null;
};
