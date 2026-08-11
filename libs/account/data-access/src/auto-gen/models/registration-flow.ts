/* tslint:disable */
/* eslint-disable */

/**
 * Luồng thực hiện đăng kí
 * - 1: Thực hiện đăng ký bình thường
 * - 2: Thực hiện đăng kí và lấy token bằng mã OTP
 * - 3: Không thể thực hiện đăng kí, đã có tài khoản liên kết với WiOnPos, thực hiện đăng nhập bằng mật khẩu
 */
export enum RegistrationFlow {
  Normal = 1,
  OtpSignIn = 2,
  PasswordSignIn = 3
}
