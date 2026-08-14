import { WIPermissionContext } from '@wi-mfes/perm';
import {
  PermissionActionEnum,
  PermissionModuleEnum,
} from '@wion-fnb/shared/components';
import { TDSMenuDTO } from 'tds-ui/menu';
import { TDSHelperString } from 'tds-ui/shared/utility';

export function getMenuAppliedPermissions(
  menu: TDSMenuDTO,
  permissionContext: WIPermissionContext,
  isOwner?: boolean
) {
  switch (TDSHelperString.compoundUnicode(menu.name)) {
    case 'Bán hàng':
      if (permissionContext) {
        menu.hidden =
          !permissionContext.check(
            PermissionModuleEnum.orders,
            PermissionActionEnum.impersonateCreate
          ) &&
          !permissionContext.check(
            PermissionModuleEnum.orders,
            PermissionActionEnum.create
          );
      } else {
        menu.hidden = true;
      }
      break;
    case 'Đơn hàng':
      if (permissionContext) {
        menu.hidden =
          !permissionContext.check(
            PermissionModuleEnum.orders,
            PermissionActionEnum.viewAll
          ) &&
          !permissionContext.check(
            PermissionModuleEnum.orders,
            PermissionActionEnum.view
          ) &&
          !permissionContext.check(
            PermissionModuleEnum.orders,
            PermissionActionEnum.impersonateCreate
          ) &&
          !permissionContext.check(
            PermissionModuleEnum.orders,
            PermissionActionEnum.create
          );
      } else {
        menu.hidden = true;
      }
      break;
    case 'Hóa đơn điện tử':
      if (permissionContext) {
        menu.hidden = !permissionContext.check(
          PermissionModuleEnum.invoices,
          PermissionActionEnum.view
        );
      } else {
        menu.hidden = true;
      }
      break;
    case 'Sản phẩm':
      if (menu.listChild && menu.listChild.length > 0 && permissionContext) {
        menu.listChild.map((child) => {
          if (
            TDSHelperString.compoundUnicode(child.name) == 'Danh sách sản phẩm'
          ) {
            child.hidden =
              !permissionContext.check(
                PermissionModuleEnum.products,
                PermissionActionEnum.view
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.products,
                PermissionActionEnum.create
              );
          }

          if (TDSHelperString.compoundUnicode(child.name) == 'Bảng giá') {
            child.hidden =
              !permissionContext.check(
                PermissionModuleEnum.priceLists,
                PermissionActionEnum.view
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.products,
                PermissionActionEnum.create
              );
          }
        });

        let showedMenus = menu.listChild.filter((m) => !m.hidden);
        // nếu chỉ còn hiện 1 menu con => gán làm menu lớn
        if (showedMenus.length == 1) {
          showedMenus[0].icon = menu.icon;
          menu = showedMenus[0];
        }
        if (showedMenus.length == 0) {
          menu.hidden = true;
        }
      } else {
        menu.hidden = true;
      }
      break;
    case 'Kho hàng':
      if (menu.listChild && menu.listChild.length > 0 && permissionContext) {
        menu.listChild.map((child) => {
          if (TDSHelperString.compoundUnicode(child.name) == 'Xuất nhập kho') {
            let receivedNotesHidden =
              !permissionContext.check(
                PermissionModuleEnum.goodsReceivedNotes,
                PermissionActionEnum.viewAll
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.goodsReceivedNotes,
                PermissionActionEnum.view
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.goodsReceivedNotes,
                PermissionActionEnum.impersonateCreate
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.goodsReceivedNotes,
                PermissionActionEnum.create
              );
            let deliveryNotesHidden =
              !permissionContext.check(
                PermissionModuleEnum.goodsDeliveryNotes,
                PermissionActionEnum.viewAll
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.goodsDeliveryNotes,
                PermissionActionEnum.view
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.goodsDeliveryNotes,
                PermissionActionEnum.impersonateCreate
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.goodsDeliveryNotes,
                PermissionActionEnum.create
              );
            child.hidden = receivedNotesHidden && deliveryNotesHidden;
          }

          if (TDSHelperString.compoundUnicode(child.name) == 'Nhà cung cấp') {
            child.hidden =
              !permissionContext.check(
                PermissionModuleEnum.suppliers,
                PermissionActionEnum.view
              ) &&
              !permissionContext.check(
                PermissionModuleEnum.suppliers,
                PermissionActionEnum.create
              );
          }
        });

        let showedMenus = menu.listChild.filter((m) => !m.hidden);
        // nếu chỉ còn hiện 1 menu con => gán làm menu lớn
        if (showedMenus.length == 1) {
          showedMenus[0].icon = menu.icon;
          menu = showedMenus[0];
        }
        // nếu không có menu con nào => ẩn menu lớn
        if (showedMenus.length == 0) {
          menu.hidden = true;
        }
      } else {
        menu.hidden = true;
      }
      break;
    case 'Khách hàng':
      if (permissionContext) {
        menu.hidden = !permissionContext.checkAny(
          PermissionModuleEnum.customers,
          [
            PermissionActionEnum.view,
            PermissionActionEnum.viewAll,
            PermissionActionEnum.create,
            PermissionActionEnum.impersonateCreate,
            PermissionActionEnum.edit,
            PermissionActionEnum.impersonateEdit,
            PermissionActionEnum.delete,
            PermissionActionEnum.groupUpdate,
          ]
        );
      } else {
        menu.hidden = true;
      }
      break;

    case 'Sổ quỹ':
      if (permissionContext) {
        menu.hidden =
          !permissionContext.check(
            PermissionModuleEnum.receipts,
            PermissionActionEnum.viewAll
          ) &&
          !permissionContext.check(
            PermissionModuleEnum.receipts,
            PermissionActionEnum.view
          ) &&
          !permissionContext.check(
            PermissionModuleEnum.receipts,
            PermissionActionEnum.create
          );
      } else {
        menu.hidden = true;
      }
      break;
    case 'Báo cáo':
      if (menu.listChild && menu.listChild.length > 0 && permissionContext) {
        menu.listChild.map((child) => {
          if (
            TDSHelperString.compoundUnicode(child.name) == 'Báo cáo bán hàng'
          ) {
            child.hidden = !permissionContext.check(
              PermissionModuleEnum.reports,
              PermissionActionEnum.sales
            );
          }

          if (
            TDSHelperString.compoundUnicode(child.name) == 'Báo cáo tồn kho'
          ) {
            child.hidden = !permissionContext.check(
              PermissionModuleEnum.reports,
              PermissionActionEnum.inventory
            );
          }

          if (
            TDSHelperString.compoundUnicode(child.name) == 'Báo cáo doanh thu'
          ) {
            child.hidden = !permissionContext.check(
              PermissionModuleEnum.reports,
              PermissionActionEnum.revenue
            );
          }

          if (
            TDSHelperString.compoundUnicode(child.name) ==
            'Doanh thu theo nhân viên'
          ) {
            child.hidden = !permissionContext.check(
              PermissionModuleEnum.reports,
              PermissionActionEnum.shopUserRevenue
            );
          }

          if (
            TDSHelperString.compoundUnicode(child.name) == 'Xuất - Nhập - Tồn'
          ) {
            child.hidden = !permissionContext.check(
              PermissionModuleEnum.reports,
              PermissionActionEnum.inventoryInOut
            );
          }
        });

        let showedMenus = menu.listChild.filter((m) => !m.hidden);
        // nếu chỉ còn hiện 1 menu con => gán làm menu lớn
        if (showedMenus.length == 1) {
          showedMenus[0].icon = menu.icon;
          menu = showedMenus[0];
        }
        // nếu không có menu con nào => ẩn menu lớn
        if (showedMenus.length == 0) {
          menu.hidden = true;
        }
      } else {
        menu.hidden = true;
      }
      break;
    case 'Kênh kết nối':
      break;
    case 'Cài đặt':
      if (menu.listChild && menu.listChild.length > 0 && permissionContext) {
        menu.listChild.map((child) => {
          if (TDSHelperString.compoundUnicode(child.name) == 'Cài đặt chung') {
            child.hidden =
              !permissionContext.check(
                PermissionModuleEnum.store,
                PermissionActionEnum.negativeStockSetting
              ) && !isOwner;
          }

          if (TDSHelperString.compoundUnicode(child.name) == 'Cài đặt mẫu in') {
            child.hidden = !permissionContext.check(
              PermissionModuleEnum.printing,
              PermissionActionEnum.configurePrintingTemplate
            );
          }

          if (
            TDSHelperString.compoundUnicode(child.name) ==
              'Nhân viên & Phân quyền' ||
            TDSHelperString.compoundUnicode(child.name) == 'Nhân viên'
          ) {
            // Chủ DN mới được xem vai trò
            if (isOwner) {
              child.name = 'Nhân viên & Phân quyền';
            } else {
              child.name = 'Nhân viên';
            }
          }
        });

        let showedMenus = menu.listChild.filter((m) => !m.hidden);
        // nếu chỉ còn hiện 1 menu con => gán làm menu lớn
        if (showedMenus.length == 1) {
          showedMenus[0].icon = menu.icon;
          menu = showedMenus[0];
        }
        // nếu không có menu con nào => ẩn menu lớn
        if (showedMenus.length == 0) {
          menu.hidden = true;
        }
      } else {
        menu.hidden = true;
      }
      break;
    case 'Ứng dụng kết nối':
      break;
  }
  return menu;
}
