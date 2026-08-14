import { WPImageComponent } from '@wion-fnb/file/feature';
// import {
//   DropdownSelectShopComponent,
//   ModalCreateBusinessComponent,
//   ModalCreateShopComponent,
//   ModalEditProfileShopComponent,
//   modalLockedAccountComponent,
//   ModalSelectShopComponent,
//   ModalWaitingCreateComponent,
// } from '@wion-fnb/shop/ui';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TDSLayoutModule } from 'tds-ui/layout';
import {
  TDSBreakpointEnum,
  TDSBreakpointService,
  TDSDestroyService,
  gridResponsiveMap,
} from 'tds-ui/core/services';
import {
  TDSHelperObject,
  TDSHelperString,
  TDSSafeAny,
} from 'tds-ui/shared/utility';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import {
  debounceTime,
  filter,
  fromEvent,
  map,
  mergeMap,
  of,
  takeUntil,
} from 'rxjs';
import { TDSDrawerModule } from 'tds-ui/drawer';
import { TDSMenuDTO, TDSMenuModule } from 'tds-ui/menu';
import { TDSMapperPipeModule } from 'tds-ui/cdk/pipes/mapper';
import { TDSMessageModule, TDSMessageService } from 'tds-ui/message';
import { TDSModalModule, TDSModalService } from 'tds-ui/modal';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSButtonModule } from 'tds-ui/button';

import {
  ShopInvitationService,
  BusinessListItemDto,
  BusinessInvitationDto,
  ShopOfBusinessDto,
  UserProfileService,
  UserProfileDto,
} from '@wion-fnb/account/data-access';
import { WAuthService } from '@wion-fnb/shared/services';
import {
  WPErrorsHelperService,
  WPShopPermissionService,
  StatusErrorPage,
  getMenuAppliedPermissions,
  buildTenantUrl,
} from '@wion-fnb/shared/utils';
import { DisconnectErrorComponent } from '@wion-fnb/error/feature';
import { TDSConfigService } from 'tds-ui/core/config';
import {
  TDSNotificationModule,
  TDSNotificationService,
} from 'tds-ui/notification';
import { TDSToolTipModule } from 'tds-ui/tooltip';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
// import { ModalChangePasswordComponent } from '@wion-fnb/account/feature';
// import { ModalResponseInvitationComponent } from '@wion-fnb/shop/feature';
import { RoleService } from '@wion-fnb/account/data-access';
// import {
//   createWPPortalApiModuleProviders,
//   UserService,
// } from '@wion-fnb/portal/data-access';
import {
  LayoutMenu,
  SignedInBusinessDto,
  SignedInShopDto,
  FNBKEY_ACCESSTOKEN,
} from '@wion-fnb/shared/components';
import { DateHelperService } from 'tds-ui/i18n';
// import { ServicePackageDetailComponent } from '@wion-fnb/service-package/ui';
import { TDSThemeModule } from 'tds-ui/theme';
// import {
//   createWPSettingApiModuleProviders,
//   TimeZoneService,
// } from '@wion-fnb/setting/data-access';
import { WIMfConfigService } from '@wi-mfes/config';
import { WI_PERMISSION_CONTEXT } from '@wi-mfes/perm';
import { WIShopIdentity } from '@wi-mfes/context';
import { addDays } from 'date-fns';

const cmp = [
  DisconnectErrorComponent,
  WPImageComponent,
  // DropdownSelectShopComponent,
  // ServicePackageDetailComponent,
];

@Component({
  selector: 'wion-fnb-layout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    TDSLayoutModule,
    TDSDrawerModule,
    TDSMenuModule,
    TDSMapperPipeModule,
    TDSModalModule,
    TDSMessageModule,
    TDSSpinnerModule,
    TDSAvatarModule,
    TDSDropDownModule,
    TDSHeaderModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSSelectModule,
    TDSButtonModule,
    TDSNotificationModule,
    TDSToolTipModule,
    CdkScrollableModule,
    ScrollingModule,
    TDSThemeModule,
    ...cmp,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.scss'],
  styles: [],
  providers: [
    TDSDestroyService,
    // ...createWPSettingApiModuleProviders(
    //   {
    //     useFactory: (service: WIMfConfigService) => ({
    //       rootUrl: service.createApiConfig('setting'),
    //     }),
    //     deps: [WIMfConfigService],
    //   },
    //   [TimeZoneService]
    // ),
    // ...createWPPortalApiModuleProviders(
    //   {
    //     useFactory: (service: WIMfConfigService) => ({
    //       rootUrl: service.createApiConfig('portal'),
    //     }),
    //     deps: [WIMfConfigService],
    //   },
    //   [UserService]
    // ),
  ],
  // animations: [
  //   routeFadeMotion,
  // ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  @ViewChild('offlineTmp', { static: false }) template?: TemplateRef<{
    data: boolean;
  }>;

  isCollapsed = false;
  hiddenSider = false;
  visibleMenu = false;
  visiblePackage = false;
  loading = false;
  breakpoint!: TDSBreakpointEnum;
  // menu đang áp dụng
  listMenu: Array<TDSMenuDTO> = [];
  // menu mặc định
  listMenuDefault: Array<TDSMenuDTO> = LayoutMenu;
  // danh sách link các menu chỉ được xem ở chế độ dev
  onlyDevModeLinks: string[] = [
    // '/dashboard/overview',
  ];
  // danh sách link các menu được mặc định là collapse menu khi chọn
  collapsedMenuLinks: string[] = ['/ordering/multiple-create'];
  // danh sách link các menu chỉ được xem khi là chủ shop
  onlyIsOwnerModeLinks: string[] = ['/integration/dashboard'];
  // danh sách link các menu hiển thị ở cửa hàng HO
  headOfficeModeLinks: string[] = [
    '/customer/list',
    '/supplier/list',
    '/price-list/list',
    '/integration/dashboard',
    '/setting/general',
  ];
  // Thông tin user
  userInfo: UserProfileDto | null = null;
  // Thông tin shop đang đăng nhập
  _signInData: SignedInBusinessDto | null = null;
  identity: WIShopIdentity | null = null;
  errorStatus: StatusErrorPage | null = null;
  // danh sách các trang ko hiện thông báo yêu cầu tạo shop
  directExceptions = [
    '/account/login',
    '/account/sign-up',
    '/account/forgot-password',
  ];
  // permissionContext = inject(WI_PERMISSION_CONTEXT);
  // keyAccessToken = inject(FNBKEY_ACCESSTOKEN);
  overviewUrl = '/dashboard/overview';
  shopUrl = '/shop';
  private mfeService = inject(WIMfConfigService);

  constructor(
    private breakpointService: TDSBreakpointService,
    // private signInHandleService: WPSignInHandleService,
    private userProfileService: UserProfileService,
    // private cacheHandleService: WPCacheHandleService,
    private shopInvitationService: ShopInvitationService,
    private dateHelperService: DateHelperService,
    private roleService: RoleService,
    private errorsHelperService: WPErrorsHelperService,
    private shopPermissionService: WPShopPermissionService,
    private route: ActivatedRoute,
    // private portalUserService: UserService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private platform: Platform,
    private router: Router,
    private authenService: WAuthService,
    private message: TDSMessageService,
    private tdsConfigService: TDSConfigService,
    private notificationService: TDSNotificationService,
    private cdr: ChangeDetectorRef,
    public destroy$: TDSDestroyService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isCollapsed = this.collapsedMenuLinks.some((link) =>
          event.urlAfterRedirects.includes(link)
        );
      });
    this.tdsConfigService.set('message', { maxStack: 1 });
    this.tdsConfigService.set('notification', { maxStack: 1 });
    // this.loadResponsive();
    this.loadLocalStorageChange();
    this.loadSignedInShop();
    this.loadingShopData();
    this.loadShopPermissions();
    this.loadUserProfile();
    this.loadErrors();
  }

  private loadResponsive() {
    //bắt responsive
    if (this.platform.isBrowser) {
      this.breakpointService
        .subscribe(gridResponsiveMap)
        .pipe(takeUntil(this.destroy$))
        .subscribe((bp) => {
          this.breakpointObserver(bp);
          this.breakpoint = bp;
        });
    }
  }

  private loadLocalStorageChange() {
    // bắt sự kiện khi local storage có sự thay đổi
    fromEvent(document, 'visibilitychange')
      .pipe(
        filter(() => !document.hidden),
        map(() => !document.hidden),
        mergeMap((visibility) => {
          if (visibility) {
            return this.authenService.getCacheToken();
          }
          return of(null);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (token) => {
          if (!token) {
            this.logOut();
          }
        },
      });
  }

  private loadUserProfile() {
    this.userProfileService
      .userProfileGetUserProfile()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.userInfo = res;
          this.cdr.markForCheck();
        },
      });
  }

  private loadShopPermissions() {
    this.shopPermissionService
      .getShopDataAndPermissions()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: unknown) => {
          if (data) {
            // ẩn hiện menu theo quyền
            this.loadMenu();
          } else {
            this.listMenu = [];
          }
          this.cdr.markForCheck();
        },
        error: (error: any) => {
          if (error && error.status == 0) {
            this.openServerErrorModal();
          }
          this.cdr.markForCheck();
        },
      });
  }

  private loadingShopData() {
    // this.signInHandleService
    //   .getLoadingShopObs()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (data: boolean) => {
    //       this.loading = data;
    //     },
    //   });
  }

  showLockedAccount() {
    // if (!this._signInData) return;
    // const modal = this.modalService.create({
    //   title: '',
    //   footer: null,
    //   content: modalLockedAccountComponent,
    //   closable: false,
    //   keyboard: false,
    //   bodyStyle: {
    //     padding: '24px',
    //   },
    //   viewContainerRef: this.viewContainerRef,
    //   componentParams: {
    //     signInData: TDSHelperObject.cloneObject(this._signInData),
    //   },
    // });
    // modal.componentInstance?.completeChange
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: boolean) => {
    //       if (!res) {
    //         this.logOut();
    //         modal.close();
    //       }
    //     },
    //   });
  }

  private loadSignedInShop() {
    // this.signInHandleService
    //   .getSignInData()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (data: any) => {
    //       let activeBusinesses =
    //         this.mapperActiveBusinesses(data?.listBusiness ?? []) ?? [];
    //       if (
    //         !this.router.url.includes(this.shopUrl) &&
    //         activeBusinesses.length == 0
    //       ) {
    //         this.router.navigate([buildTenantUrl(this.shopUrl, null)]);
    //         return;
    //       }
    //       // lấy shopId + tenantId thông qua url params
    //       if (
    //         this.route.snapshot.params['shop_id'] &&
    //         this.route.snapshot.params['tenant_id']
    //       ) {
    //         this.identity = {
    //           shopId: Number(this.route.snapshot.params['shop_id']),
    //           tenantId: this.route.snapshot.params['tenant_id'],
    //         };
    //       } else {
    //         this.identity = null;
    //       }
    //       if (data) {
    //         if (data.currentShop?.id == this.identity?.shopId) {
    //           if (data.currentShop && data.currentShop.id) {
    //             // cập nhật phân quyền & thông tin shop theo shop đã chọn
    //             this.loadListPermission(data.currentShop);
    //           }
    //           // dữ liệu shop, business đang đăng nhập
    //           this._signInData = TDSHelperObject.cloneObject(data);
    //           // Xử lý đăng nhập shop (thứ tự check ưu tiên: tên TK > lời mời > trạng thái TK > chọn shop)
    //           this.checkUserProfileName(data);
    //         }
    //         this.signInHandleService.loadAccountUser(this.destroy$);
    //         this.signInHandleService.loadListShopUser(this.destroy$);
    //       }
    //       this.cdr.markForCheck();
    //     },
    //     error: (error: any) => {
    //       if (error && error.status == 0) {
    //         this.openServerErrorModal();
    //       }
    //       this.cdr.markForCheck();
    //     },
    //   });
  }

  // load phân quyền mới sau khi đăng nhập
  private loadListPermission(shop: ShopOfBusinessDto) {
    this.roleService
      .roleGetCurrentRolePermissions()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.shopPermissionService.setShopPermission(data, shop);
        },
        error: (e) => {
          this.shopPermissionService.loadListPermissionError(e);
        },
      });
  }

  // Bước 1 check tên TK
  private checkUserProfileName(data: SignedInBusinessDto) {
    this.loading = true;
    this.cdr.markForCheck();
    this.userProfileService
      .userProfileGetUserProfile()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.loading = false;
          if (user && !user.name) {
            // chưa nhập tên TK => bắt buộc lưu tên
            this.onEditProfile(data);
          } else {
            // check lời mời (bước 2)
            this.loadInvitations(data);
          }
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.loading = false;
          this.loadInvitations(data);
          this.cdr.markForCheck();
        },
      });
  }

  // Bước 2 check lời mời
  private loadInvitations(data: SignedInBusinessDto) {
    // this.loading = true;
    // this.cdr.markForCheck();
    // // kiểm tra cache để bỏ qua thông báo lời mời
    // let cacheInvitation = this.cacheHandleService.getCacheSessionInvitation();
    // if (!cacheInvitation) {
    //   this.shopInvitationService
    //     .shopInvitationGetUserInvitationList()
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (invitations) => {
    //         this.loading = false;
    //         if (invitations && invitations.length > 0) {
    //           this.showModalSelectInvitations(data, invitations);
    //         } else {
    //           // check shop bị khóa (bước 3)
    //           this.checkLockedShop(data);
    //         }
    //         this.cdr.markForCheck();
    //       },
    //       error: (error) => {
    //         this.loading = false;
    //         this.checkLockedShop(data);
    //         this.cdr.markForCheck();
    //       },
    //     });
    // } else {
    //   this.loading = false;
    //   this.checkLockedShop(data);
    // }
  }

  // Bước 3 check trạng thái shop hiện tại
  private checkLockedShop(data: SignedInBusinessDto) {
    if (!data.hasActiveShop && data.isLocked) {
      this.showLockedAccount();
    } else {
      // chọn shop (bước 4)
      this.loadCurrentShop(data);
    }
  }

  // Bước 4 select shop
  private loadCurrentShop(data: SignedInBusinessDto) {
    if (!data?.currentShop) {
      let activeBusinesses =
        this.mapperActiveBusinesses(data?.listBusiness ?? []) ?? [];
      // trường hợp có nhiều DN đang hoạt động
      if (activeBusinesses.length > 1) {
        this.selectShop();
      } else if (activeBusinesses.length == 1) {
        // trường hợp chỉ có 1 DN đang hoạt động
        let activeShops = activeBusinesses[0]?.shops ?? [];
        if (activeShops.length > 1) {
          this.selectShop();
        } else if (activeShops.length == 1) {
          this.onChangeShop({
            id: activeShops[0].id,
            tenantId: activeBusinesses[0].tenantId,
            shopName: activeShops[0].name,
          });
        } else {
          this.message.info(
            'Vui lòng tạo cửa hàng để sử dụng các tính năng của WiOn POS'
          );
          this.router.navigate([buildTenantUrl(this.shopUrl, null)]);
          this.createBusiness();
        }
      } else {
        // trường hợp chưa tạo DN đang hoạt động
        this.message.info(
          'Vui lòng tạo cửa hàng để sử dụng các tính năng của WiOn POS'
        );
        this.createBusiness();
      }
    }
    this.cdr.markForCheck();
  }

  showModalSelectInvitations(
    data: SignedInBusinessDto,
    businessInvitations?: BusinessInvitationDto[]
  ) {
    // setTimeout(() => {
    //   let element = document.getElementsByClassName('select-invitations-modal');
    //   if (element.length == 0) {
    //     const modal = this.modalService.create({
    //       title: '',
    //       content: ModalResponseInvitationComponent,
    //       bodyStyle: {
    //         padding: '24px',
    //       },
    //       className: 'select-invitations-modal',
    //       viewContainerRef: this.viewContainerRef,
    //       componentParams: {
    //         businessInvitations: businessInvitations,
    //       },
    //       footer: null,
    //       onCancel: (cmp: any) => {
    //         cmp?.onClose();
    //       },
    //     });
    //     modal.componentInstance?.completeChange
    //       ?.pipe(takeUntil(this.destroy$))
    //       .subscribe({
    //         next: (res: any) => {
    //           modal.close();
    //           // nếu tham gia nhiều hơn 1 shop, cho chọn lại shop
    //           if (res && res.length > 1) {
    //             this.selectShop();
    //           } else if (res && res.length == 1) {
    //             //nếu tham gia 1 shop đăng nhập vào shop đã chọn
    //             let shopId = {
    //               id: res[0].shopId!,
    //               tenantId: res[0].role?.tenantId!,
    //               shopName: res[0].shopName,
    //             };
    //             this.onChangeShop(shopId);
    //           } else {
    //             this.checkLockedShop(data);
    //           }
    //           this.cdr.markForCheck();
    //         },
    //       });
    //   }
    // }, 500);
  }

  // chỉnh sửa thông tin tài khoản
  private onEditProfile(data: SignedInBusinessDto) {
    // this.errorsHelperService.setOpenModal(true);
    // const modal = this.modalService.create({
    //   title: 'Chỉnh sửa cá nhân',
    //   content: ModalEditProfileShopComponent,
    //   closable: false,
    //   style: {
    //     'z-index': '50',
    //   },
    //   bodyStyle: {
    //     padding: '0',
    //   },
    //   okText: 'Lưu',
    //   onOk: (cmp: any) => {
    //     cmp.onSave();
    //     return false;
    //   },
    //   cancelText: null,
    //   viewContainerRef: this.viewContainerRef,
    // });
    // modal.componentInstance?.loadingData
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: any) => {
    //       modal.getConfig().okDisabled = res;
    //     },
    //   });
    // modal.componentInstance?.updatedUserProfile
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: any) => {
    //       if (res) {
    //         setTimeout(() => {
    //           window.location.reload();
    //         }, 500);
    //       }
    //       this.errorsHelperService.setOpenModal(false);
    //       modal.close();
    //     },
    //   });
  }

  // cập nhật menu
  private loadMenu() {
    // if (!this._signInData?.currentShop) {
    //   this.listMenu = [];
    //   return;
    // }
    // let defaultMenu: TDSMenuDTO[] = this.listMenuDefault.map((m) =>
    //   TDSHelperObject.cloneObject(m)
    // );
    // let menu: TDSMenuDTO[] = [];
    // defaultMenu.map((m) => {
    //   // set lại menu theo phân quyền
    //   m = getMenuAppliedPermissions(
    //     m,
    //     this.permissionContext,
    //     this._signInData?.currentShop?.isOwner
    //   );
    //   // nếu là HO, ẩn các menu không cho phép hiện
    //   if (this._signInData?.currentShop?.isHeadOffice && !m.hidden) {
    //     if (!!m.link && !this.headOfficeModeLinks.includes(m.link)) {
    //       m.hidden = true;
    //     } else {
    //       if (m.listChild && m.listChild.length > 0) {
    //         m.listChild.map((child) => {
    //           if (
    //             !!child.link &&
    //             !this.headOfficeModeLinks.includes(child.link)
    //           ) {
    //             child.hidden = true;
    //           }
    //         });
    //         let activeChildren = m.listChild.filter((c) => !c.hidden);
    //         if (activeChildren.length == 0) {
    //           m.hidden = true;
    //         } else if (activeChildren.length == 1) {
    //           activeChildren[0].icon = m.icon;
    //           m = activeChildren[0];
    //         }
    //       }
    //     }
    //   }
    //   // môi trường không phải DEV sẽ ẩn bớt các menu
    //   if (!this.isDevMode && !m.hidden) {
    //     if (!!m.link && this.onlyDevModeLinks.includes(m.link)) {
    //       m.hidden = true;
    //     } else {
    //       if (m.listChild && m.listChild.length > 0) {
    //         m.listChild.map((child) => {
    //           if (!!child.link && this.onlyDevModeLinks.includes(child.link)) {
    //             child.hidden = true;
    //           }
    //         });
    //         let activeChildren = m.listChild.filter((c) => !c.hidden);
    //         if (activeChildren.length == 0) {
    //           m.hidden = true;
    //         } else if (activeChildren.length == 1) {
    //           activeChildren[0].icon = m.icon;
    //           m = activeChildren[0];
    //         }
    //       }
    //     }
    //   }
    //   // tài khoản không phải chủ shop sẽ ẩn bớt các menu
    //   if (!this._signInData?.currentShop?.isOwner && !m.hidden) {
    //     if (!!m.link && this.onlyIsOwnerModeLinks.includes(m.link)) {
    //       m.hidden = true;
    //     } else {
    //       if (m.listChild && m.listChild.length > 0) {
    //         m.listChild.map((child) => {
    //           if (
    //             !!child.link &&
    //             this.onlyIsOwnerModeLinks.includes(child.link)
    //           ) {
    //             child.hidden = true;
    //           }
    //         });
    //         let activeChildren = m.listChild.filter((c) => !c.hidden);
    //         if (activeChildren.length == 0) {
    //           m.hidden = true;
    //         } else if (activeChildren.length == 1) {
    //           activeChildren[0].icon = m.icon;
    //           m = activeChildren[0];
    //         }
    //       }
    //     }
    //   }
    //   // set lại link active và xóa menu bị ẩn (bước cuối cùng)
    //   if (!m.hidden) {
    //     m.link = !!m.link ? buildTenantUrl(m.link, this.identity) : null;
    //     if (m.listChild) {
    //       m.listChild.map((child, i) => {
    //         child.link = buildTenantUrl(child.link, this.identity);
    //       });
    //       m.listChild = m.listChild.filter((child) => !child.hidden);
    //     }
    //     menu.push(m);
    //   }
    // });
    // this.listMenu = menu;
    // // check collapse menu nếu url hiện tại yêu cầu
    // this.isCollapsed = this.collapsedMenuLinks.some((link) =>
    //   this.router.url.includes(link)
    // );
  }

  // cập nhật và xử lý lỗi trả về từ api
  private loadErrors() {
    this.errorsHelperService
      .getErrorAction()
      .pipe(
        filter(
          (d) =>
            this.errorStatus != 'unauthorized' &&
            this.errorStatus != 'forbidden' &&
            this.errorStatus != 'gateway-timeout'
        ),
        debounceTime(500)
      )
      .subscribe({
        next: (res: any) => {
          if (res && res.status) {
            this.handleErrors(res);
          }
          this.cdr.markForCheck();
        },
      });

    this.errorsHelperService
      .getOpenModalObs()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          // sau khi đóng modal chỉnh sửa sẽ chuyển trang mất kết nối
          const offline = this.errorsHelperService.getDisconnectErrorValue();
          if (offline && !res) {
            this.errorsHelperService.setErrorAction({ status: 'disconnect' });
          }
        },
      });

    window.ononline = (event: Event) => {
      this.errorsHelperService.setDisconnectErrorObs(false);
      this.errorsHelperService.setErrorAction({ status: 'reconnect' });
    };

    window.onoffline = (event: Event) => {
      this.errorsHelperService.setDisconnectErrorObs(true);
      this.errorsHelperService.setErrorAction({ status: 'disconnect' });
    };
  }

  handleErrors(err: {
    status: StatusErrorPage;
    errorType?: number;
    isRefreshToken?: boolean;
  }) {
    // nếu đang mở modal thì show thông báo
    const openModal = this.errorsHelperService.getOpenModal();
    switch (err.status) {
      // lỗi mất kết nối
      case 'disconnect':
        if (openModal) {
          if (this.template) {
            this.notificationService.template(this.template, {
              data: true,
              placement: 'bottomLeft',
              duration: 3000,
            });
          }
        } else {
          // hiện trang lỗi mất kết nối
          this.errorStatus = err.status;
        }
        break;
      // kết nối lại
      case 'reconnect':
        // nếu đang mở modal thì show thông báo
        if (openModal) {
          if (this.template) {
            this.notificationService.template(this.template, {
              data: false,
              placement: 'bottomLeft',
              duration: 3000,
            });
          }
        } else {
          // reload trang
          this.errorStatus = null;
          window.location.reload();
        }
        break;
      // lỗi không xác thực (401 hoặc 403 có trả errorType)
      case 'unauthorized':
        this.errorStatus = err.status;
        this.modalService.closeAll();
        this.handleAuthorizeError(err);
        break;
      // lỗi forbidden (403 không có nội dung lỗi)
      case 'forbidden':
        // hiện trang lỗi không có quyền truy cập
        this.errorStatus = err.status;
        this.modalService.closeAll();
        this.modalService.info({
          title: `Phân quyền đã được thay đổi`,
          content: `Chủ doanh nghiệp đã thay đổi phân quyền vai trò của bạn. Vui lòng tải lại trang để cập nhật sự thay đổi này.`,
          onOk: () => {
            this.router.navigate([
              buildTenantUrl(this.overviewUrl, this.identity),
            ]);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          },
          okText: 'Tải lại trang',
          cancelText: null,
        });
        break;
      // lỗi không xác định (403)
      case 'unknow':
        if (openModal) {
          this.notificationService.error(
            'Đã có lỗi xảy ra',
            '<span class="w-[320px]">Hệ thống đang gặp sự cố kỹ thuật. Bạn vui lòng thử lại sau.</span>'
          );
        } else {
          this.errorStatus = err.status;
        }
        break;
      // lỗi server (0)
      case 'internal-server':
        if (openModal) {
          this.notificationService.error(
            'Đã có lỗi xảy ra',
            '<span class="w-[320px]">Hệ thống đang gặp sự cố kỹ thuật. Bạn vui lòng thử lại sau.</span>'
          );
        } else {
          this.errorStatus = err.status;
        }
        break;
      // Lỗi server (>= 500)
      case 'gateway-timeout':
        if (openModal) {
          this.notificationService.error(
            'Đã có lỗi xảy ra',
            '<span class="w-[320px]">Hệ thống đang gặp sự cố kỹ thuật. Bạn vui lòng thử lại sau.</span>'
          );
        } else {
          this.errorStatus = err.status;
          this.modalService.closeAll();
          this.openServerErrorModal();
        }
        break;
      default:
        break;
    }
  }

  private breakpointObserver(bp: TDSBreakpointEnum) {
    switch (bp) {
      case 'xs':
        this.screenMobile();
        break;
      case 'sm':
        this.screenMobile();
        break;
      case 'md':
        this.screenTablet();
        break;
      case 'lg':
        this.screenLaptop();
        break;
      default:
        this.screenDesktop();
        break;
    }
  }

  onClickMenu(menu: TDSMenuDTO) {
    this.isCollapsed = this.mapperCollapsedMenu(menu, this.identity);
  }

  onToggleMenu(event: TDSSafeAny) {
    this.visibleMenu = !this.visibleMenu;
  }

  getOutletState(o: RouterOutlet) {
    return o.isActivated ? o.activatedRoute : '';
  }

  readonly mapperRouter = (o: RouterOutlet) => {
    return o.isActivated ? o.activatedRoute : '';
  };

  directToShop() {
    // this.router.navigateByUrl(buildTenantUrl(this.shopUrl, this.identity));
  }

  showLogoutModal() {
    this.modalService.create({
      title: 'Đăng xuất',
      content: `<div class="tds-body-2">Bạn có chắc chắn muốn đăng xuất khỏi WiOn POS?</div>`,
      size: 'sm',
      okText: 'Đăng xuất',
      cancelText: 'Đóng',
      closable: true,
      onOk: () => {
        this.logOut();
      },
    });
  }

  logOut() {
    const apiGateway = localStorage.getItem('GATEWAY_URL') as string;
    localStorage.clear();
    sessionStorage.clear();
    if (TDSHelperString.hasValueString(apiGateway)) {
      localStorage.setItem('GATEWAY_URL', apiGateway);
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  private screenMobile() {
    console.log('screenMobile');
    if (!this.isCollapsed) this.isCollapsed = true;
    if (!this.hiddenSider) {
      this.hiddenSider = true;
    }
  }

  private screenTablet() {
    console.log('screenTablet');
    if (!this.isCollapsed) this.isCollapsed = true;
    if (!this.hiddenSider) {
      this.hiddenSider = true;
    }
  }

  private screenLaptop() {
    console.log('screenTablet');
    if (!this.isCollapsed) this.isCollapsed = true;
    if (!this.hiddenSider) {
      this.hiddenSider = true;
    }
  }

  private screenDesktop() {
    console.log('screenDesktop');
    if (this.hiddenSider) {
      this.hiddenSider = false;
    }
  }

  private selectShop() {
    // const modal = this.modalService.create({
    //   title: '',
    //   footer: null,
    //   content: ModalSelectShopComponent,
    //   closable: false,
    //   keyboard: false,
    //   centered: true,
    //   className: 'select-shop-modal',
    //   bodyStyle: {
    //     padding: '20px',
    //   },
    //   viewContainerRef: this.viewContainerRef,
    // });
    // modal.componentInstance?.selectChange
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: any) => {
    //       if (res) {
    //         this.onChangeShop(res);
    //       } else {
    //         this.message.info(
    //           'Vui lòng tạo cửa hàng để sử dụng các tính năng của WiOn POS'
    //         );
    //         this.router.navigateByUrl(buildTenantUrl(this.shopUrl, null));
    //         this.createBusiness();
    //       }
    //       modal.close();
    //     },
    //   });
  }

  handleAuthorizeError(error: {
    status: StatusErrorPage;
    errorType?: number;
    isRefreshToken?: boolean;
    message?: string;
    shopName?: string;
  }) {
    // let currentBusiness = this._signInData?.listBusiness.find(
    //   (b: any) => b.tenantId == this._signInData?.currentBusiness?.tenantId
    // );
    // let currentShop = currentBusiness?.shops?.find(
    //   (s: any) => s.id == this._signInData?.currentShop?.id
    // );
    // let isOwner = currentBusiness?.isOwner ?? currentShop?.isOwner ?? false;
    // this.signInHandleService.clearSignInEntityId();
    // switch (error.errorType) {
    //   case 2:
    //     this.openAuthorizeErrorModal(error.shopName);
    //     break;
    //   case 3:
    //   case 4:
    //     if (this._signInData) {
    //       this.openExpiredServicePackageModal(isOwner);
    //     } else {
    //       this.logOut();
    //     }
    //     break;
    //   default:
    //     this.openAuthorizeErrorModal(error.shopName);
    //     break;
    // }
  }

  openAuthorizeErrorModal(shopName?: string) {
    this.modalService.error({
      title: `Không thể truy cập`,
      content: `Bạn không thể truy cập cửa hàng <strong>${
        shopName ? shopName : ''
      }</strong>. Vui lòng liên hệ chủ cửa hàng để được hỗ trợ.`,
      onCancel: () => {
        this.logOut();
      },
      cancelText: 'Đóng',
      okText: null,
    });
  }

  openServerErrorModal() {
    this.modalService.error({
      title: `Lỗi hệ thống`,
      content: `Đã có lỗi xảy ra, bạn vui lòng đăng nhập lại để sử dụng.`,
      onOk: () => {
        this.logOut();
      },
      okText: 'Đăng nhập lại',
      cancelText: null,
    });
  }

  openExpiredServicePackageModal(isShopOwner: boolean) {
    if (isShopOwner) {
      this.modalService.create({
        content: `
        <div class="tds-body-2 font-regular tds-color-text-primary">Đã hết thời hạn sử dụng gói dịch vụ. Bạn vui lòng liên hệ với chúng tôi để được duy trì hoạt động của tài khoản.</div>
        <div class="mt-2 tds-body-2 font-regular tds-color-text-primary">Hotline: <span class="font-semibold">0898 001 888</span></div>
        `,
        title: `Gói dịch vụ đã hết hạn`,
        bodyStyle: {
          padding: '16px',
          'padding-bottom': '8px',
        },
        okText: 'Liên hệ',
        cancelText: 'Đăng xuất',
        closable: false,
        onOk: () => {
          this.openContactPortalModal();
          return false;
        },
        onCancel: () => {
          this.logOut();
        },
      });
    } else {
      this.modalService.create({
        content: `<div class="tds-body-2 font-regular tds-color-text-primary">Cửa hàng bạn đang truy cập đã bị khóa do hết thời gian sử dụng. Vui lòng đăng nhập lại.</div>`,
        title: `Cửa hàng đã bị khóa`,
        bodyStyle: {
          padding: '16px',
          'padding-bottom': '8px',
        },
        okText: 'Đăng nhập lại',
        cancelText: null,
        closable: false,
        onOk: () => {
          this.logOut();
        },
      });
    }
  }

  openContactPortalModal() {
    // this.modalService.create({
    //   content: `
    //   <div class="tds-body-2 font-regular tds-color-text-primary">Sau khi bấm Xác nhận, thông tin của bạn sẽ được gửi đến bộ phận chăm sóc khách hàng của WiOn POS. Chúng tôi sẽ liên hệ lại và hỗ trợ bạn trong thời gian sớm nhất.</div>
    //   <div class="mt-2 tds-body-2 font-regular tds-color-text-primary">Hotline: <span class="font-semibold">0898 001 888</span></div>
    //   `,
    //   title: 'Liên hệ',
    //   bodyStyle: {
    //     padding: '16px',
    //     'padding-bottom': '8px',
    //   },
    //   okText: 'Xác nhận',
    //   cancelText: 'Hủy',
    //   closable: true,
    //   okLoading: this.loading,
    //   onOk: () => {
    //     this.loading = true;
    //     this.cdr.markForCheck();
    //     this.portalUserService
    //       .userCreateTicket()
    //       .pipe(takeUntil(this.destroy$))
    //       .subscribe({
    //         next: (res: any) => {
    //           this.loading = false;
    //           this.message.success('Yêu cầu của bạn đã được gửi');
    //           this.cdr.markForCheck();
    //         },
    //         error: (err: any) => {
    //           this.loading = false;
    //           this.message.error('Đã có lỗi xảy ra. Xin vui lòng thử lại');
    //           this.cdr.markForCheck();
    //         },
    //       });
    //   },
    // });
  }

  onChangeShop(data: SignedInShopDto) {
    this.router.navigate([
      buildTenantUrl(this.overviewUrl, {
        shopId: data.id!,
        tenantId: data.tenantId!,
      }),
    ]);
    this.message.success(`<div class='flex flex-wrap items-center'>
      Đã chuyển sang "<span class='font-semibold max-w-[500px] w-fit truncate'>${data?.shopName}</span>"
    </div>`);
    setTimeout(() => {
      window.location.reload();
    }, 500);
    this.cdr.markForCheck();
  }

  openCreateShopWithPackageModal(isBusiness?: boolean) {
    // this.modalService.create({
    //   content: `
    //   <div class="tds-body-2 font-regular tds-color-text-primary">Sau khi bấm Xác nhận, thông tin của bạn sẽ được gửi đến bộ phận chăm sóc khách hàng của WiOn POS. Chúng tôi sẽ liên hệ lại và hỗ trợ bạn trong thời gian sớm nhất.</div>
    //   <div class="mt-2 tds-body-2 font-regular tds-color-text-primary">Hotline: <span class="font-semibold">0898 001 888</span></div>
    //   `,
    //   title: `Yêu cầu thêm ${isBusiness ? 'doanh nghiệp' : 'cửa hàng'}`,
    //   bodyStyle: {
    //     padding: '16px',
    //     'padding-bottom': '8px',
    //   },
    //   okText: 'Xác nhận',
    //   cancelText: 'Hủy',
    //   closable: false,
    //   onOk: () => {
    //     this.loading = true;
    //     this.cdr.markForCheck();
    //     this.portalUserService
    //       .userCreateTicket()
    //       .pipe(takeUntil(this.destroy$))
    //       .subscribe({
    //         next: (res: any) => {
    //           this.message.success('Yêu cầu của bạn đã được gửi');
    //           this.loading = false;
    //           this.cdr.markForCheck();
    //         },
    //         error: (err: any) => {
    //           this.message.error('Đã có lỗi xảy ra. Xin vui lòng thử lại');
    //           this.loading = false;
    //           this.cdr.markForCheck();
    //         },
    //       });
    //   },
    // });
  }

  createBusiness() {
    // let ownerShops: ShopOfBusinessDto[] = [];
    // this._signInData?.listBusiness?.forEach((b: any) => {
    //   if (b.isOwner && b.shops) {
    //     ownerShops = [...ownerShops, ...b.shops];
    //   }
    // });
    // let isStandardBusiness =
    //   this._signInData?.listBusiness &&
    //   this._signInData.listBusiness.length > 0 &&
    //   ownerShops.some(
    //     (s: any) =>
    //       s.shopServicePackage &&
    //       s.shopServicePackage.servicePackageType != ServicePackageType.Trial &&
    //       !s.shopServicePackage?.isExpired
    //   );
    // if (isStandardBusiness) {
    //   this.openCreateShopWithPackageModal(true);
    // } else {
    //   this.errorsHelperService.setOpenModal(true);
    //   let totalActiveBusiness =
    //     this.mapperActiveBusinesses(this._signInData?.listBusiness ?? [])
    //       ?.length ?? 0;
    //   const modal = this.modalService.create({
    //     title: `Thêm mới ${
    //       totalActiveBusiness > 0 ? 'doanh nghiệp' : 'cửa hàng'
    //     }`,
    //     content: ModalCreateBusinessComponent,
    //     size: 'lg',
    //     bodyStyle: {
    //       padding: '0',
    //     },
    //     okText: 'Lưu',
    //     onOk: (cmp) => {
    //       cmp.onSave();
    //       return false;
    //     },
    //     cancelText: 'Hủy bỏ',
    //     onCancel: (cmp) => {
    //       cmp.onClose();
    //     },
    //     viewContainerRef: this.viewContainerRef,
    //   });
    //   modal.componentInstance?.loadingData
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res: any) => {
    //         modal.getConfig().okDisabled = res;
    //       },
    //     });
    //   modal.componentInstance?.loadResult
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res: any) => {
    //         if (res && res.businessId) {
    //           this.getCreatedBusiness(
    //             res.businessId,
    //             res.isCreateFisrtBusiness
    //           );
    //         }
    //         modal.close();
    //         this.errorsHelperService.setOpenModal(false);
    //         this.cdr.markForCheck();
    //       },
    //     });
    // }
  }

  getCreatedBusiness(businessId: number, isCreateFisrtBusiness?: boolean) {
    // this.errorsHelperService.setOpenModal(true);
    // const modal = this.modalService.create({
    //   title: '',
    //   footer: null,
    //   closable: false,
    //   content: ModalWaitingCreateComponent,
    //   size: 'md',
    //   bodyStyle: {
    //     padding: '0',
    //   },
    //   viewContainerRef: this.viewContainerRef,
    //   componentParams: {
    //     businessId: businessId,
    //     isFirstBusiness: isCreateFisrtBusiness,
    //   },
    // });
    // modal.componentInstance?.createComplete
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: any) => {
    //       if (res) {
    //         let newShop = res.business.shops?.find(
    //           (s: any) => s.isActive && !s.isHeadOffice
    //         )!;
    //         // tạo shop đầu tiên, thông báo gói dịch vụ
    //         if (res.isCreateFisrtBusiness) {
    //           let expiryTime = newShop?.shopServicePackage?.expiryTime
    //             ? new Date(newShop.shopServicePackage.expiryTime)
    //             : addDays(Date.now(), 7);
    //           this.modalService.create({
    //             title: 'Thông báo',
    //             content: `<div class="tds-body-2">Bạn có 7 ngày trải nghiệm miễn phí <strong class="tds-color-text-brand-primary">Gói Standard</strong> và sẽ hết hạn kể từ ngày <strong>${this.dateHelperService.format(
    //               expiryTime,
    //               'dd/MM/yyyy'
    //             )}</strong>.</div>`,
    //             okText: null,
    //             cancelText: 'Đóng',
    //             onCancel: () => {
    //               // đăng nhập vào shop đầu tiên của doanh nghiệp vừa tạo
    //               this.onChangeShop(newShop);
    //             },
    //           });
    //         } else {
    //           this.onChangeShop(newShop);
    //         }
    //       }
    //       this.errorsHelperService.setOpenModal(false);
    //       modal.close();
    //     },
    //   });
  }

  // chỉ thêm shop cho DN đang đăng nhập
  onCreateShop(event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // let ownerShops: ShopOfBusinessDto[] = [];
    // this._signInData?.listBusiness?.forEach((b: any) => {
    //   if (b.isOwner && b.shops) {
    //     ownerShops = [...ownerShops, ...b.shops];
    //   }
    // });
    // let isStandardBusiness =
    //   this._signInData?.listBusiness &&
    //   this._signInData.listBusiness.length > 0 &&
    //   ownerShops.some(
    //     (s: any) =>
    //       s.shopServicePackage &&
    //       s.shopServicePackage.servicePackageType != ServicePackageType.Trial &&
    //       !s.shopServicePackage?.isExpired
    //   );
    // let isStandardShop =
    //   this._signInData?.currentShop &&
    //   this._signInData?.currentShop?.shopServicePackage?.servicePackageType !=
    //     ServicePackageType.Trial;
    // if (isStandardBusiness || isStandardShop) {
    //   this.openCreateShopWithPackageModal();
    // } else {
    //   this.errorsHelperService.setOpenModal(true);
    //   const modal = this.modalService.create({
    //     title: `Thêm cửa hàng`,
    //     content: ModalCreateShopComponent,
    //     size: 'md',
    //     bodyStyle: {
    //       padding: '0',
    //     },
    //     okText: 'Lưu',
    //     onOk: (cmp: any) => {
    //       cmp.onSave();
    //       return false;
    //     },
    //     cancelText: 'Hủy',
    //     onCancel: (cmp: any) => {
    //       cmp.onClose();
    //     },
    //     viewContainerRef: this.viewContainerRef,
    //     componentParams: {
    //       shops: this._signInData?.currentBusiness?.shops
    //         ? TDSHelperObject.cloneObject(this._signInData.currentBusiness)
    //             .shops
    //         : [],
    //     },
    //   });
    //   modal.componentInstance?.loadingData
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res: any) => {
    //         modal.getConfig().okDisabled = res;
    //       },
    //     });
    //   modal.componentInstance?.loadResult
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res: any) => {
    //         if (res) {
    //           this.onChangeShop(res);
    //         }
    //         this.errorsHelperService.setOpenModal(false);
    //         modal.close();
    //       },
    //     });
    // }
  }

  onVisiblePackageDrawer(event: boolean) {
    this.visiblePackage = event;
  }

  onChangePassword() {
    // this.errorsHelperService.setOpenModal(true);
    // const modal = this.modalService.create({
    //   content: ModalChangePasswordComponent,
    //   bodyStyle: {
    //     padding: '0',
    //   },
    //   footer: null,
    //   closable: false,
    //   viewContainerRef: this.viewContainerRef,
    // });
    // modal.componentInstance?.completeChangePassword
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: any) => {
    //       if (res) {
    //         this.logOut();
    //       }
    //       modal.close();
    //       this.errorsHelperService.setOpenModal(false);
    //     },
    //   });
  }

  get isDevMode() {
    const key_env = this.mfeService.getDefaultConfig().environment;
    return !!key_env && (key_env == 'DEV' || key_env == 'QA');
  }

  readonly mapperActiveBusinesses = (data: BusinessListItemDto[]) => {
    let businesses: BusinessListItemDto[] = data?.map((b) =>
      TDSHelperObject.cloneObject(b)
    );
    if (!businesses) return null;
    let result: BusinessListItemDto[] = [];
    businesses.map((b) => {
      let business = TDSHelperObject.cloneObject(b) as BusinessListItemDto;
      let activeShops = business.shops?.filter(
        (s) => s.isActive && !s.isLocked
      );
      if (activeShops && activeShops.length > 0) {
        business.shops = activeShops;
        result.push(business);
      }
    });
    return result;
  };

  readonly mapperCollapsedMenu = (
    menu: TDSMenuDTO | undefined,
    identity: WIShopIdentity | null
  ) => {
    return this.collapsedMenuLinks.some(
      (link) => buildTenantUrl(link, identity) == menu?.link
    );
  };
}
