/* tslint:disable */
/* eslint-disable */
export interface AddressDto {

  /**
   * Mã tỉnh, thành phố
   */
  cityCode?: string | null;

  /**
   * Tên tỉnh, thành phố
   */
  cityName?: string | null;

  /**
   * Mã quận, huyện, thành phố thuộc tỉnh
   */
  districtCode?: string | null;

  /**
   * Tên quận, huyện, thành phố thuộc tỉnh
   */
  districtName?: string | null;

  /**
   * Cờ: Là địa chỉ mới?
   */
  isNewAddress?: boolean | null;

  /**
   * Số nhà, tên đường
   */
  street?: string | null;

  /**
   * Mã xã, phường, thị trấn
   */
  wardCode?: string | null;

  /**
   * Tên xã, phường, thị trấn
   */
  wardName?: string | null;
}
