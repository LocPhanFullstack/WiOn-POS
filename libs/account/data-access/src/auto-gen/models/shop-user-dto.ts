/* tslint:disable */
/* eslint-disable */
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
import { RoleDto } from '../models/role-dto';
import { ShopUserHistoryDto } from '../models/shop-user-history-dto';
import { ShopUserStatus } from '../models/shop-user-status';
export type ShopUserDto = EntityDtoOfLong & {

/**
 * Tên
 */
'name'?: string | null;

/**
 * Số điện thoại
 */
'phone'?: string | null;

/**
 * Email
 */
'email'?: string | null;

/**
 * Ngày sinh
 */
'dateOfBirth'?: string | null;

/**
 * Địa chỉ
 */
'address'?: string | null;

/**
 * Vai trò
 */
'role'?: RoleDto | null;

/**
 * Cờ: được xem giá vốn sản phẩm?
 */
'isCostView'?: boolean;

/**
 * Trạng thái làm việc
 */
'status'?: ShopUserStatus;

/**
 * Id tài khoản
 */
'userId'?: string | null;

/**
 * Cờ: là chủ cửa hàng?
 */
'isShopOwner'?: boolean;

/**
 * Lịch sử trạng thái làm việc
 */
'histories'?: Array<ShopUserHistoryDto> | null;

/**
 * Url hình đại diện
 */
'avatarUrl'?: string | null;

/**
 * Ngày tạo
 */
'creationTime'?: string;

/**
 * Số CMND/CCCD
 */
'idCardNumber'?: string | null;
};
