/* tslint:disable */
/* eslint-disable */
import { UserShopDto } from '../models/user-shop-dto';
export interface AllUserShopListDto {

  /**
   * Số lượng cửa hàng bị khóa
   */
  lockedShopCount?: number;

  /**
   * Danh sách cửa hàng bị khóa
   */
  lockedShops?: Array<UserShopDto> | null;

  /**
   * Danh sách cửa hàng có thể sử dụng
   */
  shops?: Array<UserShopDto> | null;
}
