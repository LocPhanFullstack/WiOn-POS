/* tslint:disable */
/* eslint-disable */
import { ShopUserStatus } from '../models/shop-user-status';
export interface ShopUserCompactDto {

  /**
   * URL hình đại diện
   */
  avatarUrl?: string | null;

  /**
   * Email cửa hàng
   */
  email?: string | null;

  /**
   * Id của nhân viên cửa hàng
   */
  id?: number;

  /**
   * User có phải là chủ cửa hàng hay không
   */
  isShopOwner?: boolean;

  /**
   * Tên nhân viên
   */
  name?: string | null;

  /**
   * Số điện thoại nhân viên
   */
  phone?: string | null;

  /**
   * Id vai trò của nhân viên
   */
  roleId?: number;

  /**
   * Trạng thái nhân viên của cửa hàng
   */
  status?: ShopUserStatus;

  /**
   * Id tài khoản của nhân viên (Tài khoản wiaccount)
   */
  userId?: string | null;
}
