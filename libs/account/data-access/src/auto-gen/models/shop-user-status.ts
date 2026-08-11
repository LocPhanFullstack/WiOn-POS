/* tslint:disable */
/* eslint-disable */

/**
 * Trạng thái nhân viên của cửa hàng
 * - 1: Chờ xác nhận
 * - 2: Từ chối
 * - 3: Đang làm việc
 * - 4: Ngưng làm việc
 * - 5: Đã hủy
 */
export enum ShopUserStatus {
  Invited = 1,
  Refused = 2,
  Working = 3,
  Suspended = 4,
  Canceled = 5
}
