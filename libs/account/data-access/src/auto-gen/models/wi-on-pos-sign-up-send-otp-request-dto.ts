/* tslint:disable */
/* eslint-disable */
import { SendOtpMethod } from '../models/send-otp-method';
export interface WiOnPosSignUpSendOtpRequestDto {

  /**
   * Phương thức gửi OTP
   */
  method: SendOtpMethod;

  /**
   * Số điện thoại đăng kí tài khoản WiOnPOS
   */
  phoneNumber: string;
}
