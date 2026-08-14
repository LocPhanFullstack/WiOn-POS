import {
  BusinessListItemDto,
  ShopIdDto,
  ShopOfBusinessDto,
} from '@wion-fnb/account/data-access';

export interface SignedInBusinessDto {
  /**
   * Cờ: true: tài khoản này vẫn còn cửa hàng có thể truy cập (trong trường hợp nếu tài khoản này vẫn có thể truy cập là nhân viên của shop khác)
   */
  hasActiveShop?: boolean;

  /**
   * Cờ: true: tài khoản này đã bị khóa trong trường hợp tất cả cửa hàng trong doanh nghiệp người này làm chủ hết hạn gói dịch vụ
   */
  /**
   * Cờ: người dùng hiện tại là chủ doanh nghiệp và cửa hàng này?
   */
  isOwner?: boolean;
  /**
   * Cờ: true: bị khóa khi shop hiện tại ngưng hoạt động, hoặc nhân viên bị ngưng làm việc
   */
  isLocked?: boolean;
  currentShop: ShopOfBusinessDto | null | undefined;
  currentBusiness: BusinessListItemDto | null | undefined;
  listBusiness: BusinessListItemDto[];
}

export type SignedInShopDto = ShopIdDto & {
  shopName?: string | null | undefined;
};
