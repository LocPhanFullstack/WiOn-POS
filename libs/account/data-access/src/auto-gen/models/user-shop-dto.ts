/* tslint:disable */
/* eslint-disable */
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
export type UserShopDto = EntityDtoOfLong & {

/**
 * Tên cửa hàng
 */
'name'?: string | null;

/**
 * Cờ: người dùng hiện tại là chủ cửa hàng này?
 */
'isOwner'?: boolean;

/**
 * Cờ: bị khóa?
 */
'isLocked'?: boolean;

/**
 * Tên vai trò nhân viên của người dùng hiện tại trong cửa hàng này
 */
'roleName'?: string | null;

/**
 * Id tenant
 */
'tenantId'?: string | null;
};
