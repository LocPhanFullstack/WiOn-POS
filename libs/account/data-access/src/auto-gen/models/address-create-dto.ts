/* tslint:disable */
/* eslint-disable */
export interface AddressCreateDto {

  /**
   * Mã tỉnh, thành phố
   */
  cityCode?: string | null;

  /**
   * Mã quận, huyện, thành phố thuộc tỉnh
   */
  districtCode?: string | null;

  /**
   * Cờ: Là địa chỉ mới?
   */
  isNewAddress?: boolean;

  /**
   * Số nhà, tên đường
   */
  street?: string | null;

  /**
   * Mã xã, phường, thị trấn
   */
  wardCode?: string | null;
}
