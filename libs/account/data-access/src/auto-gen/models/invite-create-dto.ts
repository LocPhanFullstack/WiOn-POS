/* tslint:disable */
/* eslint-disable */
export interface InviteCreateDto {

  /**
   * Địa chỉ
   */
  address?: string | null;

  /**
   * Ngày sinh
   */
  dateOfBirth?: string | null;

  /**
   * Email
   */
  email?: string | null;

  /**
   * Có cho phép xem giá vốn sản phẩm hay không?
   */
  isAllowViewProductOriginalPrice?: boolean | null;

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
}
