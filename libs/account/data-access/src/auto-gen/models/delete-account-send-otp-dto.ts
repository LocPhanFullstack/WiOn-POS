/* tslint:disable */
/* eslint-disable */
import { SendOtpMethod } from '../models/send-otp-method';
export interface DeleteAccountSendOtpDto {

  /**
   * Transaction Id của thao tác xóa tài khoản
   */
  id: number;

  /**
   * Phương thức gửi OTP, hiện tại chỉ sử dụng Zalo hoặc SMS
   */
  method: SendOtpMethod;

  /**
   * Transaction token của thao tác xóa tài khoản
   */
  token: string;
}
