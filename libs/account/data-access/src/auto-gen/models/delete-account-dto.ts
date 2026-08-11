/* tslint:disable */
/* eslint-disable */
export interface DeleteAccountDto {

  /**
   * Transaction Id của thao tác xóa tài khoản
   */
  id: number;

  /**
   * Mã OTP
   */
  otpCode: string;

  /**
   * Transaction token của thao tác xóa tài khoản, lấy từ thao tác gửi OTP
   */
  token: string;
}
