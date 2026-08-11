/* tslint:disable */
/* eslint-disable */
export interface FnbInviteCreateDto {

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
   * Số CMND/CCCD
   */
  idCardNumber?: string | null;

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
