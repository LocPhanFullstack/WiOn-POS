/* tslint:disable */
/* eslint-disable */
import { AddressCreateDto } from '../models/address-create-dto';
export interface BusinessCreateDto {

  /**
   * Địa chỉ
   */
  address?: AddressCreateDto | null;

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
