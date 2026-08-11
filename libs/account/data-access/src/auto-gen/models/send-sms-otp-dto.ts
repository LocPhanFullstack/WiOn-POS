/* tslint:disable */
/* eslint-disable */
import { SendOtpMethod } from '../models/send-otp-method';
export interface SendSmsOtpDto {

  /**
   * Phương thức gửi OTP
   */
  method?: SendOtpMethod;

  /**
   * Số điện thoại nhận otp tương ứng với tài khoản
   */
  phoneNumber?: string | null;
}
