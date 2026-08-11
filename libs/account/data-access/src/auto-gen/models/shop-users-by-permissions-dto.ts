/* tslint:disable */
/* eslint-disable */
import { ShopUserCompactDto } from '../models/shop-user-compact-dto';
export interface ShopUsersByPermissionsDto {

  /**
   * Cờ: cửa hàng một nhân viên?
   */
  isSingle?: boolean;

  /**
   * Danh sách nhân viên
   */
  items?: Array<ShopUserCompactDto> | null;
}
