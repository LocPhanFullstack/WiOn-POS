/* tslint:disable */
/* eslint-disable */
import { RegistrationFlow } from '../models/registration-flow';
export interface CheckAccountByPhoneResponseDto {

  /**
   * Đã đăng ký tài khoản ở WiAccount hay chưa?
   */
  isRegistered?: boolean;

  /**
   * Đã đăng ký sử dụng ứng dụng WiOnPos hay chưa?
   */
  isRegisteredWiOnPos?: boolean;

  /**
   * Luồng thực hiện tại đăng kí
   */
  registrationFlow?: RegistrationFlow;
}
