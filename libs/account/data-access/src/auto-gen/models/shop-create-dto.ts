/* tslint:disable */
/* eslint-disable */
import { AddressCreateDto } from '../models/address-create-dto';
export interface ShopCreateDto {

  /**
   * Địa chỉ
   */
  address?: AddressCreateDto | null;

  /**
   * Email
   */
  email?: string | null;

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
