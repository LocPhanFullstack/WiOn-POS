/* tslint:disable */
/* eslint-disable */
export interface ResetPasswordSmsDto {

  /**
   * Mật khẩu mới
   */
  newPassword?: string | null;

  /**
   * Mã Otp
   */
  otpCode?: string | null;

  /**
   * Số điện thoại nhận otp tương ứng với tài khoản
   */
  phoneNumber?: string | null;

  /**
   * Token để tạo mật khẩu mới
   */
  token?: string | null;
}
