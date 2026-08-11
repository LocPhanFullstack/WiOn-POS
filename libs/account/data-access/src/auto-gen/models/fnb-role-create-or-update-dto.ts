/* tslint:disable */
/* eslint-disable */
export interface FnbRoleCreateOrUpdateDto {

  /**
   * Tên vai trò
   */
  name?: string | null;

  /**
   * Ghi chú
   */
  note?: string | null;

  /**
   * Danh sách quyền của vai trò
   */
  permissions?: Array<string> | null;
}
