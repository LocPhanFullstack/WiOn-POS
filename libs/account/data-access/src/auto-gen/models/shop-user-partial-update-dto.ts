/* tslint:disable */
/* eslint-disable */
export interface ShopUserPartialUpdateDto {

  /**
   * Địa chỉ
   */
  address?: string | null;

  /**
   * Có được phép xem giá vốn sản phẩm hay không
   */
  canViewCost?: boolean | null;

  /**
   * Ngày sinh
   */
  dateOfBirth?: string | null;

  /**
   * Id vai trò
   */
  roleId?: number | null;
}
