/* tslint:disable */
/* eslint-disable */
import { ShopUserDto } from '../models/shop-user-dto';
export interface ShopUserGetListResponseDto {

  /**
   * Số lượng kết quả của tìm kiếm
   */
  currentCount?: number;

  /**
   * Danh sách nhân viên
   */
  shopUsers?: Array<ShopUserDto> | null;

  /**
   * Tổng số lượng kết quả không phân trang
   */
  total?: number;

  /**
   * Tổng số lượng nhân viên của cửa hàng
   */
  totalUser?: number;
}
