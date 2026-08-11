/* tslint:disable */
/* eslint-disable */
import { ShopUserStatus } from '../models/shop-user-status';

/**
 * Lịch sử trạng thái nhân viên của cửa hàng
 */
export interface ShopUserHistoryDto {

  /**
   * Mốc thời gian
   */
  creationTime?: string;

  /**
   * Lý do thay đổi trạng thái
   */
  reason?: string | null;

  /**
   * Trạng thái nhân viên của cửa hàng
   */
  status?: ShopUserStatus;
}
