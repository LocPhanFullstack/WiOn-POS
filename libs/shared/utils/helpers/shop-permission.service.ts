import { Injectable } from '@angular/core';
import {
  PermissionGrantGroupDto,
  ShopOfBusinessDto,
} from '@wion-fnb/account/data-access';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WPShopPermissionService {
  private readonly _shopAndPermissionsObs = new BehaviorSubject<{
    currentShop: ShopOfBusinessDto;
    permissions: string[] | null;
  } | null>(null);
  private readonly _listPermissionObs = new BehaviorSubject<string[] | null>(
    null
  );
  private _listPermission: string[] = [];

  constructor() {}

  setShopPermission(
    permissionGrantGroups: PermissionGrantGroupDto[],
    shop: ShopOfBusinessDto
  ) {
    this._listPermission = permissionGrantGroups.reduce((acc, item) => {
      (item.permissions || []).forEach((group: any) => {
        group.forEach((permission: any) => {
          if (permission.isGranted && permission.name) {
            acc.push(permission.name);
          }
        });
      });
      return acc;
    }, [] as string[]);

    this._listPermissionObs.next(this._listPermission);
    this._shopAndPermissionsObs.next({
      currentShop: shop,
      permissions: this._listPermission,
    });
  }

  clearShopPermission() {
    this._listPermission = [];
    this._listPermissionObs.next(null);
    this._shopAndPermissionsObs.next(null);
  }

  getListPermission() {
    return this._listPermissionObs.asObservable();
  }

  loadListPermissionError(error: any) {
    this._listPermissionObs.error(error);
    this._shopAndPermissionsObs.error(error);
  }

  // lấy shop hiện tại và quyền hiện tại (dùng để set lại menu layout)
  getShopDataAndPermissions() {
    return this._shopAndPermissionsObs.asObservable();
  }

  checkPermission(module: string, action: string): boolean {
    return this._listPermission.some((x) => x == `${module}.${action}`);
  }
}
