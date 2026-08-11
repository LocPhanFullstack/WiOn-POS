/* tslint:disable */
/* eslint-disable */
import { AddressUpdateDto } from '../models/address-update-dto';
export interface BusinessUpdateDto {

  /**
   * Địa chỉ
   */
  address?: AddressUpdateDto | null;

  /**
   * Các ID ngành hàng
   */
  categoryIds?: Array<number> | null;

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
}
