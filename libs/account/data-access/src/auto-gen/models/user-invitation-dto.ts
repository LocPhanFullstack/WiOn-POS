/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
import { InvitationStatus } from '../models/invitation-status';
import { RoleDto } from '../models/role-dto';
export type UserInvitationDto = EntityDtoOfLong & {

/**
 * Id cửa hàng
 */
'shopId'?: number;

/**
 * Tên cửa hàng
 */
'shopName'?: string | null;

/**
 * Id vai trò
 */
'roleId'?: string | null;

/**
 * Vai trò
 */
'role'?: RoleDto | null;

/**
 * Trạng thái lời mời
 */
'status'?: InvitationStatus;

/**
 * Địa chỉ của cửa hàng
 */
'address'?: AddressDto | null;
};
