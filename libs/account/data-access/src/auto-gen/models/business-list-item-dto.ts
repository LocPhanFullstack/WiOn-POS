/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';
import { CategoryDto } from '../models/category-dto';
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
import { ShopOfBusinessDto } from '../models/shop-of-business-dto';
export type BusinessListItemDto = EntityDtoOfLong & {

/**
 * Tên
 */
'name'?: string | null;

/**
 * Điện thoại
 */
'phone'?: string | null;

/**
 * Email
 */
'email'?: string | null;

/**
 * Địa chỉ
 */
'address'?: AddressDto | null;

/**
 * URL ảnh đại diện
 */
'avatarUrl'?: string | null;

/**
 * Danh sách danh mục
 */
'categories'?: Array<CategoryDto> | null;

/**
 * Cờ: người dùng hiện tại là chủ doanh nghiệp này?
 */
'isOwner'?: boolean;

/**
 * Danh sách cửa hàng
 */
'shops'?: Array<ShopOfBusinessDto> | null;

/**
 * Id tenant
 */
'tenantId'?: string | null;
};
