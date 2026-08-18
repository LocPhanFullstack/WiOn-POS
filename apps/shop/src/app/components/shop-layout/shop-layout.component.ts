import {
  TDSHelperObject,
  TDSHelperString,
  TDSSafeAny,
} from 'tds-ui/shared/utility';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { takeUntil } from 'rxjs';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSMessageModule, TDSMessageService } from 'tds-ui/message';
import { TDSTableModule } from 'tds-ui/table';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import {
  ShopDto,
  BusinessListItemDto,
  ShopOfBusinessDto,
  BusinessService,
  BusinessDto,
  AddressDto,
  ShopUpdateDto,
  ShopService,
  UserProfileService,
  UserProfileDto,
} from '@wion-fnb/account/data-access';
import { TDSModalModule, TDSModalService } from 'tds-ui/modal';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSMapperPipeModule } from 'tds-ui/cdk/pipes/mapper';
import { WPImageComponent } from '@wion-fnb/file/feature';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';

// import {
//   ModalBusinessDetailComponent,
//   ModalCreateBusinessComponent,
//   ModalCreateHeadOfficeComponent,
//   ModalCreateShopComponent,
//   ModalEditProfileShopComponent,
//   ModalWaitingCreateComponent,
// } from '@wion-fnb/shop/ui';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSToolTipModule } from 'tds-ui/tooltip';
import {
  buildTenantUrl,
  StatusErrorPage,
  WPErrorsHelperService,
} from '@wion-fnb/shared/utils';
import {
  EmptyDataComponent,
  ForbiddenErrorComponent,
  InternalServerErrorComponent,
  UnknowErrorComponent,
} from '@wion-fnb/error/feature';
// import { ModalChangePasswordComponent } from '@wion-fnb/account/feature';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSBadgeModule } from 'tds-ui/badges';
import {
  PermissionActionEnum,
  PermissionModuleEnum,
  SignedInBusinessDto,
  SignedInShopDto,
} from '@wion-fnb/shared/components';
// import {
//   createWPPortalApiModuleProviders,
//   UserService,
// } from '@wion-fnb/portal/data-access';
import { TDSStatisticModule } from 'tds-ui/statistic';
import { DateHelperService } from 'tds-ui/i18n';
import { TDSPopoverModule } from 'tds-ui/popover';
import { WI_PERMISSION_CONTEXT } from '@wi-mfes/perm';
import { WI_BUSINESS_CONTEXT, WIBusinessContext } from '@wi-mfes/context';
import { Router } from '@angular/router';
import { addDays } from 'date-fns';
import { WIMfConfigService } from '@wi-mfes/config';
import { TDSCardModule } from 'tds-ui/card';

const cmp = [
  InternalServerErrorComponent,
  UnknowErrorComponent,
  WPImageComponent,
  //   WPUpdateAddressComponent,
  ForbiddenErrorComponent,
  EmptyDataComponent,
];

@Component({
  selector: 'wion-fnb-shop-layout',
  standalone: true,
  imports: [
    CommonModule,
    TDSButtonModule,
    TDSSpinnerModule,
    TDSTableModule,
    TDSPageHeaderModule,
    TDSModalModule,
    TDSAvatarModule,
    TDSTagModule,
    TDSMapperPipeModule,
    TDSDropDownModule,
    TDSToolTipModule,
    TDSMessageModule,
    TDSCollapseModule,
    TDSBadgeModule,
    TDSStatisticModule,
    TDSPopoverModule,
    TDSCardModule,
    ...cmp,
  ],
  providers: [
    TDSDestroyService,
    // ...createWPAccountApiModuleProviders(
    //   {
    //     useFactory: (service: WIMfConfigService) => ({
    //       rootUrl: service.createApiConfig('account', 'authentication'),
    //     }),
    //     deps: [WIMfConfigService],
    //   },
    //   [UserProfileService, BusinessService, ShopService]
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
  templateUrl: './shop-layout.component.html',
  styleUrls: ['shop-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full flex',
  },
})
export class ShopLayoutComponent implements OnInit {
  _signInData: SignedInBusinessDto | null = null;
  listBusiness: BusinessListItemDto[] = [];
  currentShop: any | null | undefined;
  currentBusiness: BusinessDto | null = null;
  signedInShop: BusinessDto | null = null;
  activeBusinessId: number | null = null;
  activeShopId: number | null = null;
  isLoading = false;
  errorStatus: StatusErrorPage | null = null;
  visibleLockedShopDropdown: boolean = false;
  visibleUpdateAddress: boolean = false;

  businessTest = [
    {
      id: 1,
      name: 'Công ty TNHH WiOn',
      isOwner: true,
    },
    {
      id: 2,
      name: 'Cửa hàng WiOn Nguyễn Huệ',
      isOwner: false,
    },
    {
      id: 3,
      name: 'Cửa hàng WiOn Thảo Điền',
      isOwner: false,
    },
    {
      id: 4,
      name: 'Cửa hàng WiOn Quận 1',
      isOwner: false,
    },
    {
      id: 5,
      name: 'Cửa hàng WiOn Bình Thạnh',
      isOwner: false,
    },
  ];

  filterValue = { id: 1, name: 'Tất cả', isActive: null };
  filterOptions = [
    { id: 1, name: 'Tất cả', isActive: null },
    { id: 2, name: 'Đang hoạt động', isActive: true },
    { id: 3, name: 'Ngưng hoạt động', isActive: false },
  ];
  expiredTime: number = 0;
  aDayTime = 24 * 60 * 60 * 1000; //miliseconds
  anHourTime = 60 * 60 * 1000; //miliseconds
  collapseIds: { [id: number]: boolean } = {};
  overviewUrl = '/dashboard/overview';
  shopUrl = '/shop';
  // phân quyền
  author?: UserProfileDto;
  // permissionContext = inject(WI_PERMISSION_CONTEXT);
  // businessContext = inject(WI_BUSINESS_CONTEXT) as WIBusinessContext<any>;

  constructor(
    private shopService: ShopService,
    private userProfileService: UserProfileService,
    private businessService: BusinessService,
    private modalService: TDSModalService,
    private dateHelperService: DateHelperService,
    private errorsHelperService: WPErrorsHelperService,
    // private portalUserService: UserService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private destroy$: TDSDestroyService
  ) {}

  ngOnInit(): void {
    this.loadCurrentShopPermission();
    this.loadUserProfile();
  }

  loadCurrentShopPermission() {
    // this.isLoading = true;
    // this.cdr.markForCheck();
    // this.permissionContext.permissions$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       this.isLoading = false;
    //       if (res) {
    //         this.loadData();
    //       }
    //       // load danh sách cửa hàng, thông tin TK khi chưa có danh sách phân quyền
    //       this.loadBusinessList();
    //       this.loadUserProfile();
    //       this.cdr.markForCheck();
    //     },
    //     error: (error) => {
    //       this.isLoading = false;
    //       this.errorsHelperService.showMessageError(error);
    //       this.cdr.markForCheck();
    //     },
    //   });
  }

  loadData() {}

  loadBusinessList() {
    // this.businessContext.data$.pipe(takeUntil(this.destroy$)).subscribe({
    //   next: (res) => {
    //     this._signInData = res;
    //     if (res) {
    //       this.currentShop = res.currentShop;
    //       if (this.currentShop && this.currentShop.shopServicePackage) {
    //         this.expiredTime =
    //           new Date(
    //             this.currentShop.shopServicePackage.expiryTime!
    //           ).getTime() - Date.now();
    //       }
    //       this.listBusiness = res.listBusiness;
    //       // nếu có thay đổi shop đang đăng nhập => focus vào shop mới đăng nhập
    //       if (this.activeShopId != res.currentShop?.id) {
    //         this.loadBusinessById(res.currentBusiness?.id!);
    //         this.activeShopId = res.currentShop?.id!;
    //         this.activeBusinessId = res.currentBusiness?.id!;
    //         this.currentBusiness = res.currentBusiness!;
    //         this.signedInShop = res.currentShop!;
    //         this.collapseIds = {};
    //         this.collapseIds[this.activeShopId!] = true;
    //       } else {
    //         this.loadBusinessById(
    //           this.currentBusiness?.id ?? this.activeBusinessId!
    //         );
    //       }
    //     }
    //     this.cdr.markForCheck();
    //   },
    // });
  }

  loadUserProfile() {
    this.isLoading = true;
    this.cdr.markForCheck();

    this.userProfileService
      .userProfileGetUserProfile()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.author = res;
          }
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.isLoading = false;
          if (error?.errorPage) {
            this.errorStatus = error.errorPage;
          } else {
            this.errorsHelperService.showMessageError(error);
          }
          this.cdr.markForCheck();
        },
      });
  }

  loadBusinessById(id: number) {
    if (!id) return;
    this.isLoading = true;
    this.cdr.markForCheck();

    this.businessService
      .businessGet({ id: id })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.currentBusiness = res;
          }
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.isLoading = false;
          if (error?.errorPage) {
            this.errorStatus = error.errorPage;
          } else {
            this.errorsHelperService.showMessageError(error);
          }
          this.cdr.markForCheck();
        },
      });
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
    //     this.isLoading = true;
    //     this.cdr.markForCheck();
    //     this.portalUserService
    //       .userCreateTicket()
    //       .pipe(takeUntil(this.destroy$))
    //       .subscribe({
    //         next: () => {
    //           this.message.success('Yêu cầu của bạn đã được gửi');
    //           this.isLoading = false;
    //           this.cdr.markForCheck();
    //         },
    //         error: () => {
    //           this.message.error('Đã có lỗi xảy ra. Xin vui lòng thử lại');
    //           this.isLoading = false;
    //           this.cdr.markForCheck();
    //         },
    //       });
    //   },
    // });
  }

  onCreateBusiness(event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // let ownerShops: ShopOfBusinessDto[] = [];
    // this.listBusiness?.forEach((b) => {
    //   if (b.isOwner && b.shops) {
    //     ownerShops = [...ownerShops, ...b.shops];
    //   }
    // });
    // let isStandardBusiness =
    //   this.listBusiness &&
    //   this.listBusiness.length > 0 &&
    //   ownerShops.some(
    //     (s) =>
    //       s.shopServicePackage &&
    //       s.shopServicePackage.servicePackageType != ServicePackageType.Trial &&
    //       !s.shopServicePackage?.isExpired
    //   );
    // if (isStandardBusiness) {
    //   this.openCreateShopWithPackageModal(true);
    // } else {
    //   this.errorsHelperService.setOpenModal(true);
    //   let totalActiveBusiness = this.mapperActiveBusinesses(
    //     this.listBusiness
    //   ).length;
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
    //       next: (res) => {
    //         modal.getConfig().okDisabled = res;
    //       },
    //     });
    //   modal.componentInstance?.loadResult
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res) => {
    //         this.errorsHelperService.setOpenModal(false);
    //         modal.close();
    //         if (res && res.businessId) {
    //           this.getCreatedBusiness(
    //             res.businessId,
    //             res.isCreateFisrtBusiness
    //           );
    //         }
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
    //     next: (res) => {
    //       if (res) {
    //         let newShop = res.business.shops?.find(
    //           (s) => s.isActive && !s.isHeadOffice
    //         );
    //         this.currentBusiness = res;
    //         if (newShop) {
    //           // tạo shop đầu tiên, thông báo gói dịch vụ
    //           if (res.isCreateFisrtBusiness) {
    //             let expiryTime = newShop?.shopServicePackage?.expiryTime
    //               ? new Date(newShop.shopServicePackage.expiryTime)
    //               : addDays(Date.now(), 7);
    //             this.modalService.create({
    //               title: 'Thông báo',
    //               content: `<div class="tds-body-2">Bạn có 7 ngày trải nghiệm miễn phí <strong class="tds-color-text-brand-primary">Gói Standard</strong> và sẽ hết hạn kể từ ngày <strong>${this.dateHelperService.format(
    //                 expiryTime,
    //                 'dd/MM/yyyy'
    //               )}</strong>.</div>`,
    //               okText: null,
    //               cancelText: 'Đóng',
    //               viewContainerRef: this.viewContainerRef,
    //               onCancel: () => {
    //                 let identity = {
    //                   shopId: newShop.id!,
    //                   tenantId: newShop.tenantId!,
    //                 };
    //                 this.router.navigateByUrl(
    //                   buildTenantUrl(this.overviewUrl, identity)
    //                 );
    //                 this.message
    //                   .success(`<div class='flex flex-wrap items-center'>
    //                 Đã chuyển sang "<span class='font-semibold max-w-[500px] w-fit truncate'>${newShop?.name}</span>"
    //               </div>`);
    //                 setTimeout(() => {
    //                   window.location.reload();
    //                 }, 500);
    //               },
    //             });
    //           } else {
    //             let identity = {
    //               shopId: newShop.id!,
    //               tenantId: newShop.tenantId!,
    //             };
    //             this.router.navigateByUrl(
    //               buildTenantUrl(this.overviewUrl, identity)
    //             );
    //             this.message.success(`<div class='flex flex-wrap items-center'>
    //             Đã chuyển sang "<span class='font-semibold max-w-[500px] w-fit truncate'>${newShop?.name}</span>"
    //           </div>`);
    //             setTimeout(() => {
    //               window.location.reload();
    //             }, 500);
    //           }
    //         } else {
    //           // lỗi không tìm thấy cửa hàng
    //           window.location.reload();
    //         }
    //       }
    //       this.errorsHelperService.setOpenModal(false);
    //       modal.close();
    //     },
    //   });
  }

  onEditBusiness(business: BusinessDto, event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // this.errorsHelperService.setOpenModal(true);
    // const modal = this.modalService.create({
    //   title: `Chỉnh sửa doanh nghiệp`,
    //   content: ModalCreateBusinessComponent,
    //   size: 'lg',
    //   bodyStyle: {
    //     padding: '0',
    //   },
    //   okText: 'Lưu',
    //   onOk: (cmp) => {
    //     cmp.onSave();
    //     return false;
    //   },
    //   cancelText: 'Hủy',
    //   onCancel: (cmp) => {
    //     cmp.onClose();
    //   },
    //   viewContainerRef: this.viewContainerRef,
    //   componentParams: {
    //     businessId: business?.id,
    //   },
    // });
    // modal.componentInstance?.loadingData
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       modal.getConfig().okDisabled = res;
    //     },
    //   });
    // modal.componentInstance?.loadResult
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       if (res && res.businessId) {
    //         // this.signInHandleService.getSignInData().subscribe();
    //         setTimeout(() => {
    //           window.location.reload();
    //         }, 500);
    //       }
    //       this.errorsHelperService.setOpenModal(false);
    //       modal.close();
    //       this.cdr.markForCheck();
    //     },
    //   });
  }

  onViewBusinessDetail(business: BusinessDto, event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // const modal = this.modalService.create({
    //   title: `Thông tin doanh nghiệp`,
    //   content: ModalBusinessDetailComponent,
    //   size: 'md',
    //   bodyStyle: {
    //     padding: '0',
    //   },
    //   okText: null,
    //   cancelText: 'Đóng',
    //   onCancel: (cmp) => {
    //     cmp.onClose();
    //   },
    //   viewContainerRef: this.viewContainerRef,
    //   componentParams: {
    //     businessId: business?.id,
    //   },
    // });
    // modal.componentInstance?.loadingData
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       modal.getConfig().okDisabled = res;
    //     },
    //   });
    // modal.componentInstance?.updateBusiness
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       if (res) {
    //         // this.signInHandleService.getSignInData().subscribe();
    //         setTimeout(() => {
    //           window.location.reload();
    //         }, 500);
    //       }
    //       this.cdr.markForCheck();
    //     },
    //   });
  }

  // Tạo HeadOffice
  onCreateHeadOffice(event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // const modal = this.modalService.create({
    //   title: `Head Office`,
    //   content: ModalCreateHeadOfficeComponent,
    //   size: 'lg',
    //   okText: 'Thêm cửa hàng',
    //   onOk: (cmp) => {
    //     cmp.onCreateShop();
    //     return false;
    //   },
    //   cancelText: 'Đóng',
    //   onCancel: (cmp) => {
    //     cmp.onClose();
    //   },
    //   viewContainerRef: this.viewContainerRef,
    // });
    // modal.componentInstance?.loadResult
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       if (res) {
    //         this.onCreateShop();
    //       }
    //       modal.close();
    //       this.cdr.markForCheck();
    //     },
    //   });
  }

  // chỉ thêm shop cho DN đang đăng nhập
  onCreateShop(event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // this.errorsHelperService.setOpenModal(true);
    // let ownerShops: ShopOfBusinessDto[] = [];
    // this.listBusiness?.forEach((b) => {
    //   if (b.isOwner && b.shops) {
    //     ownerShops = [...ownerShops, ...b.shops];
    //   }
    // });
    // let isStandardBusiness =
    //   this.listBusiness &&
    //   this.listBusiness.length > 0 &&
    //   ownerShops.some(
    //     (s) =>
    //       s.shopServicePackage &&
    //       s.shopServicePackage.servicePackageType != ServicePackageType.Trial &&
    //       !s.shopServicePackage?.isExpired
    //   );
    // let isStandardShop =
    //   this.currentShop &&
    //   this.currentShop?.shopServicePackage?.servicePackageType !=
    //     ServicePackageType.Trial;
    // if (isStandardBusiness || isStandardShop) {
    //   this.openCreateShopWithPackageModal(false);
    // } else {
    //   const modal = this.modalService.create({
    //     title: `Thêm cửa hàng`,
    //     content: ModalCreateShopComponent,
    //     size: 'md',
    //     bodyStyle: {
    //       padding: '0',
    //     },
    //     okText: 'Lưu',
    //     onOk: (cmp) => {
    //       cmp.onSave();
    //       return false;
    //     },
    //     cancelText: 'Hủy',
    //     onCancel: (cmp) => {
    //       cmp.onClose();
    //     },
    //     viewContainerRef: this.viewContainerRef,
    //     componentParams: {
    //       shops: this.currentBusiness?.shops ?? [],
    //     },
    //   });
    //   modal.componentInstance?.loadingData
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res) => {
    //         modal.getConfig().okDisabled = res;
    //       },
    //     });
    //   modal.componentInstance?.loadResult
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res) => {
    //         if (res) {
    //           if (this.currentBusiness?.isOwner) {
    //             let identity = { shopId: res.id!, tenantId: res.tenantId! };
    //             this.router.navigateByUrl(
    //               buildTenantUrl(this.overviewUrl, identity)
    //             );
    //             this.message.success(`<div class='flex flex-wrap items-center'>
    //             Đã chuyển sang "<span class='font-semibold max-w-[500px] w-fit truncate'>${res?.name}</span>"
    //           </div>`);
    //             setTimeout(() => {
    //               window.location.reload();
    //             }, 500);
    //           } else {
    //             this.activeShopId = res.id!;
    //             this.loadBusinessById(this.currentBusiness?.id!);
    //             window.location.reload();
    //           }
    //         }
    //         this.errorsHelperService.setOpenModal(false);
    //         modal.close();
    //         this.cdr.markForCheck();
    //       },
    //     });
    // }
  }

  // chỉ sửa cho shop của DN đang đăng nhập
  onEditShop(shop: ShopDto, event?: MouseEvent) {
    // event?.preventDefault();
    // event?.stopImmediatePropagation();
    // if (shop.isHeadOffice) {
    //   this.modalService.create({
    //     title: 'Thông báo',
    //     content:
    //       '<div class="tds-body-2">Thông tin của Head Office hiện đang được đồng bộ với dữ liệu doanh nghiệp. Nếu muốn thay đổi, bạn vui lòng cập nhật thông tin của doanh nghiệp.</div>',
    //     size: 'md',
    //     cancelText: 'Hủy',
    //     okText: 'Mở chỉnh sửa',
    //     viewContainerRef: this.viewContainerRef,
    //     onOk: () => {
    //       this.onEditBusiness(this.currentBusiness!, event);
    //       this.cdr.markForCheck();
    //     },
    //   });
    // } else {
    //   this.errorsHelperService.setOpenModal(true);
    //   const modal = this.modalService.create({
    //     title: `Chỉnh sửa cửa hàng`,
    //     content: ModalCreateShopComponent,
    //     size: 'md',
    //     bodyStyle: {
    //       padding: '0',
    //     },
    //     okText: 'Lưu',
    //     onOk: (cmp) => {
    //       cmp.onSave();
    //       return false;
    //     },
    //     cancelText: 'Hủy',
    //     onCancel: (cmp) => {
    //       cmp.onClose();
    //     },
    //     viewContainerRef: this.viewContainerRef,
    //     componentParams: {
    //       shopId: shop?.id,
    //       shops: this.currentBusiness?.shops ?? [],
    //     },
    //   });
    //   modal.componentInstance?.loadingData
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res) => {
    //         modal.getConfig().okDisabled = res;
    //       },
    //     });
    //   modal.componentInstance?.loadResult
    //     ?.pipe(takeUntil(this.destroy$))
    //     .subscribe({
    //       next: (res) => {
    //         if (res) {
    //           this.activeShopId = res.id!;
    //           this.loadBusinessById(this.currentBusiness?.id!);
    //           // this.signInHandleService.getSignInData().subscribe();
    //           setTimeout(() => {
    //             window.location.reload();
    //           }, 500);
    //         }
    //         this.errorsHelperService.setOpenModal(false);
    //         modal.close();
    //         this.cdr.markForCheck();
    //       },
    //     });
    // }
  }

  // chỉnh sửa thông tin tài khoản
  onEditProfile() {
    // this.errorsHelperService.setOpenModal(true);
    // const modal = this.modalService.create({
    //   title: 'Chỉnh sửa cá nhân',
    //   content: ModalEditProfileShopComponent,
    //   style: {
    //     'z-index': '50',
    //   },
    //   bodyStyle: {
    //     padding: '0',
    //   },
    //   okText: 'Lưu',
    //   onOk: (cmp) => {
    //     cmp.onSave();
    //     return false;
    //   },
    //   cancelText: 'Hủy',
    //   onCancel: (cmp) => {
    //     cmp.onClose();
    //   },
    //   viewContainerRef: this.viewContainerRef,
    // });
    // modal.componentInstance?.loadingData
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
    //       modal.getConfig().okDisabled = res;
    //     },
    //   });
    // modal.componentInstance?.updatedUserProfile
    //   ?.pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res) => {
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
    //     next: (res) => {
    //       if (res) {
    //         this.logOut();
    //       }
    //       modal.close();
    //       this.errorsHelperService.setOpenModal(false);
    //     },
    //   });
  }

  onLoginShop(data: SignedInShopDto) {
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

  onSelectBusiness(businessId: number) {
    if (businessId == this.currentBusiness?.id) return;
    this.activeShopId = this.signedInShop?.id!;
    this.loadBusinessById(businessId);
  }

  onChangeFilterOption(option: TDSSafeAny) {
    this.filterValue = option;
  }

  onCollapseShop(shop: ShopDto) {
    this.activeShopId = shop.id!;
  }

  collapsedChange(id: number) {
    if (this.collapseIds[id]) {
      delete this.collapseIds[id];
    } else {
      this.collapseIds = {};
      this.collapseIds[id] = true;
    }
  }

  onClickContent(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  openContactPortalModal() {
    // this.visibleLockedShopDropdown = false;
    // const modal = this.modalService.create({
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
    //   onOk: () => {
    //     this.isLoading = true;
    //     this.cdr.markForCheck();
    //     this.portalUserService
    //       .userCreateTicket()
    //       .pipe(takeUntil(this.destroy$))
    //       .subscribe({
    //         next: (res) => {
    //           this.isLoading = false;
    //           this.message.success('Yêu cầu của bạn đã được gửi');
    //           modal.close();
    //           this.cdr.markForCheck();
    //         },
    //         error: (err) => {
    //           this.isLoading = false;
    //           this.message.error('Đã có lỗi xảy ra. Xin vui lòng thử lại');
    //           this.cdr.markForCheck();
    //         },
    //       });
    //   },
    // });
  }

  onUpdateHeadOfficeAddress(shop: ShopDto) {
    if (shop.isHeadOffice) {
      this.modalService.create({
        title: 'Thông báo',
        content:
          '<div class="tds-body-2">Thông tin của Head Office hiện đang được đồng bộ với dữ liệu doanh nghiệp. Nếu muốn thay đổi, bạn vui lòng cập nhật thông tin của doanh nghiệp.</div>',
        size: 'md',
        cancelText: 'Hủy',
        okText: 'Mở chỉnh sửa',
        viewContainerRef: this.viewContainerRef,
        onOk: () => {
          this.onEditBusiness(this.currentBusiness!);
          this.cdr.markForCheck();
        },
      });
    }
  }

  //   onUpdateAdressComplete(shop: ShopDto, data: SelectAddressDto | null) {
  //     if (data) {
  //       let model: ShopUpdateDto = {
  //         name: shop.name,
  //         phone: shop.phone ?? '',
  //         phone1: shop.phone1 ?? '',
  //         phone2: shop.phone2 ?? '',
  //         email: shop.email ?? '',
  //         address: {
  //           cityCode: data.cityCode,
  //           wardCode: data.wardCode,
  //           street: data.streetName,
  //           isNewAddress: true,
  //         },
  //         isActive: shop.isActive,
  //       };
  //       this.updateShop(shop.id!, model);
  //     }
  //     this.visibleUpdateAddress = false;
  //   }

  updateShop(id: number, model: ShopUpdateDto) {
    const params = {
      id: id,
      body: model,
    };
    this.isLoading = true;
    this.cdr.markForCheck();

    this.shopService
      .shopUpdate(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.message.success('Cập nhật địa chỉ thành công');
          this.activeShopId = id;
          this.loadBusinessById(this.currentBusiness?.id!);
          // this.signInHandleService.getSignInData().subscribe();
          setTimeout(() => {
            window.location.reload();
          }, 500);
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorsHelperService.showMessageError(error);
          this.cdr.markForCheck();
        },
      });
  }

  readonly mapperFilterShops = (
    shops: ShopDto[] | null | undefined,
    isActive: boolean | null
  ) => {
    if (!shops) return [];
    if (shops.length < 3) {
      // loại trừ trường hợp HO chưa được đăng ký do chỉ mới tạo 1 CH
      if (isActive == null)
        return shops.filter(
          (s) => !(s.isHeadOffice && !s.isOwner && !s.isActive)
        );
      return shops.filter(
        (s) =>
          s.isActive == isActive &&
          !(s.isHeadOffice && !s.isOwner && !s.isActive)
      );
    } else {
      if (isActive == null) return shops;
      return shops.filter((s) => s.isActive == isActive);
    }
  };

  readonly mapperActiveBusinesses = (data: BusinessListItemDto[]) => {
    let businesses: BusinessListItemDto[] = data.map((b) =>
      TDSHelperObject.cloneObject(b)
    );
    if (!businesses || businesses.length == 0) return [];
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

  readonly mapperAllowedCreateBusiness = (data: BusinessListItemDto[]) => {
    // let ownerShops: ShopOfBusinessDto[] = [];
    // data?.forEach((b) => {
    //   if (b.isOwner && b.shops) {
    //     ownerShops = [...ownerShops, ...b.shops];
    //   }
    // });
    // // toàn bộ cửa hàng đang hoạt động đều là cửa hàng nhân viên, cho phép tạo DN
    // if (ownerShops.length == 0) return true;
    // // ưu tiên check gói standard còn hạn sẽ luôn cho phép tạo cửa hàng
    // let isStandardBusiness = ownerShops.some(
    //   (s) =>
    //     s.shopServicePackage &&
    //     s.shopServicePackage.servicePackageType != ServicePackageType.Trial &&
    //     !s.shopServicePackage.isExpired
    // );
    // if (isStandardBusiness) return true;
    // return ownerShops.every((s) => !s.shopServicePackage?.isExpired);
  };

  readonly mapperShowStatusTag = (shop: ShopOfBusinessDto) => {
    return null;
    // return (
    //   !shop.isHeadOffice &&
    //   shop.shopServicePackage?.status == ServicePackageStatus.Expired
    // );
  };

  readonly mapperAllowEditShop = (shop: ShopOfBusinessDto) => {
    // return (
    //   this.currentBusiness?.id == this.activeBusinessId &&
    //   this.permissionContext.check(
    //     PermissionModuleEnum.shops,
    //     PermissionActionEnum.edit
    //   ) &&
    //   (shop.isOwner || !shop.isHeadOffice) &&
    //   !this.mapperShowStatusTag(shop)
    // );
  };

  readonly mapperActiveShopsOfBusiness = (businessId?: number) => {
    if (!businessId) return null;
    let business = this.listBusiness.find((b) => b.id == businessId);
    return business?.shops?.filter((s) => s.isActive && !s.isLocked) ?? [];
  };

  readonly mapperLockedShopData = (data: BusinessListItemDto[]) => {
    let businesses: BusinessListItemDto[] = data.map((b) =>
      TDSHelperObject.cloneObject(b)
    );
    let lockedShopCount: number = 0;
    let lockedBusiness: BusinessListItemDto[] = [];

    if (businesses && businesses.length > 0) {
      businesses.map((b) => {
        let business = TDSHelperObject.cloneObject(b) as BusinessListItemDto;
        // điều kiện lọc shop bị khóa
        let lockedShops =
          business.shops?.filter(
            (s) => s.isLocked && !(s.isHeadOffice && s.isOwner)
          ) ?? [];
        if (lockedShops.length > 0) {
          business.shops = lockedShops;
          lockedShopCount = lockedShopCount + lockedShops.length;
          lockedBusiness.push(business);
        }
      });
    }
    return {
      lockedBusiness: lockedBusiness,
      lockedShopCount: lockedShopCount,
    };
  };

  readonly mapperLockedShopName = (
    shops: ShopOfBusinessDto[] | null | undefined
  ) => {
    if (!shops) return null;
    return shops.map((s) => s.name)?.join(', ');
  };

  readonly mapperExpiredServicePackage = (data: BusinessListItemDto) => {
    // return !!data.shops?.some((s) => s.shopServicePackage?.isExpired);
  };

  readonly mapperSelectedAddress = (
    data: AddressDto | null | undefined
  ): any => {
    if (!data) return { streetName: '' };
    return {
      streetName: data.street!,
      cityCode: data.cityCode!,
      cityName: data.cityName!,
      districtCode: data.districtCode!,
      districtName: data.districtName!,
      wardCode: data.wardCode!,
      wardName: data.wardName!,
      isNewAddress: data.isNewAddress,
    };
  };

  readonly mapperAddress = (shop: ShopDto) => {
    if (!shop || !shop.address) return '---';
    let address: string[] = [];
    let data = shop.address!;

    if (!!data.street) {
      address.push(data.street);
    }

    if (!!data.wardName) {
      address.push(data.wardName);
    }

    if (!!data.districtName) {
      address.push(data.districtName);
    }

    if (!!data.cityName) {
      address.push(data.cityName);
    }

    return address.length > 0 ? address.join(', ') : '---';
  };

  readonly mapperSubPhone = (shop: ShopDto) => {
    if (!shop?.phone) return null;
    let subPhones: string[] = [];
    if (!!shop.phone1) {
      subPhones.push(shop.phone1);
    }
    if (!!shop.phone2) {
      subPhones.push(shop.phone2);
    }
    if (subPhones.length > 0) return `(SĐT phụ: ${subPhones.join(', ')})`;
    return null;
  };

  readonly mapperCountdownValue = (time: number) => {
    return Date.now() + time;
  };

  readonly mapperShowFormatTime = (time: number) => {
    if (time < this.aDayTime && time >= this.anHourTime) return 'H giờ m phút.';
    if (time < this.anHourTime) return 'm phút.';
    return 'D ngày H giờ m phút.';
  };

  //   readonly mapperPackageServiceName = (
  //     data: ShopServicePackageDto | null | undefined
  //   ) => {
  //     switch (data?.servicePackageType) {
  //       case ServicePackageType.Trial:
  //         return 'Gói Standard';
  //       case ServicePackageType.Standard:
  //         return 'Gói Standard';
  //       case ServicePackageType.Pro:
  //         return 'Gói Pro';
  //       case ServicePackageType.Contact:
  //         return 'Gói liên hệ';
  //       default:
  //         return '--';
  //     }
  //   };

  get permAction() {
    return PermissionActionEnum;
  }

  get permModule() {
    return PermissionModuleEnum;
  }
}
