/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
export type ShopDto = EntityDtoOfLong & {

/**
 * Tên
 */
'name'?: string | null;

/**
 * Điện thoại
 */
'phone'?: string | null;

/**
 * Điện thoại phụ 1
 */
'phone1'?: string | null;

/**
 * Điện thoại phụ 2
 */
'phone2'?: string | null;

/**
 * Email
 */
'email'?: string | null;

/**
 * Địa chỉ
 */
'address'?: AddressDto | null;

/**
 * Cờ: đang hoạt động
 */
'isActive'?: boolean;

/**
 * Cờ: là Head Ofice
 */
'isHeadOffice'?: boolean;

/**
 * Cờ: là chủ cửa hàng
 */
'isOwner'?: boolean;

/**
 * Id tenant
 */
'tenantId'?: string | null;

/**
 * Cờ: đã kết nối với hóa đơn điện tử
 */
'isConnectedEInvoice'?: boolean;
};
