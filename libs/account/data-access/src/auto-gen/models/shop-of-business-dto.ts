/* tslint:disable */
/* eslint-disable */
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
export type ShopOfBusinessDto = EntityDtoOfLong & {

/**
 * Tên cửa hàng
 */
'name'?: string | null;

/**
 * Cờ: đang hoạt động
 */
'isActive'?: boolean;

/**
 * Cờ: là Head Ofice
 */
'isHeadOffice'?: boolean;

/**
 * Cờ: người dùng hiện tại là chủ cửa hàng này?
 */
'isOwner'?: boolean;

/**
 * Cờ: bị khóa?
 */
'isLocked'?: boolean;
};
