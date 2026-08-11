/* tslint:disable */
/* eslint-disable */
export interface ShopUserPhoneCheckResultDto {

  /**
   * Cờ: Nhân viên với số điện thoại này đã được mời vào cửa hàng trước đó
   */
  hasExisted?: boolean | null;

  /**
   * Cờ: Số điện thoại đúng định dạng hay không? Nếu không thì HasExisted sẽ null
   */
  isValidPhone?: boolean;
}
