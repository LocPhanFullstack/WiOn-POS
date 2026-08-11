/* tslint:disable */
/* eslint-disable */
export interface InitializationStatusDto {
  businessId?: number;
  isCashBookManagementReady?: boolean;
  isCustomerManagementReady?: boolean;
  isInventoryManagementReady?: boolean;
  isProductManagementReady?: boolean;
  isReady?: boolean;
  isSettingManagementReady?: boolean;

  /**
   * Thời gian ghi nhận gần nhất
   */
  lastRecordTime?: string | null;
}
