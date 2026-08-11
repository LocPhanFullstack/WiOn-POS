/* tslint:disable */
/* eslint-disable */
import { AddressUpdateDto } from '../models/address-update-dto';
export interface ShopUpdateDto {

  /**
   * Địa chỉ
   */
  address?: AddressUpdateDto | null;

  /**
   * Email
   */
  email?: string | null;

  /**
   * Cờ: đang hoạt động
   */
  isActive?: boolean;

  /**
   * Tên
   */
  name?: string | null;

  /**
   * Điện thoại
   */
  phone?: string | null;

  /**
   * Điện thoại phụ 1
   */
  phone1?: string | null;

  /**
   * Điện thoại phụ 2
   */
  phone2?: string | null;
}
