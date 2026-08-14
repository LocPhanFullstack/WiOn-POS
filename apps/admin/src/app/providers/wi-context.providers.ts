import { BehaviorSubject } from 'rxjs';
import {
  WI_SHOP_CONTEXT,
  WI_BUSINESS_CONTEXT,
  WI_USER_CONTEXT,
  WIShopIdentity,
} from '@wi-mfes/context';
// import { WPSignInHandleService } from '@wion-fnb/shared/utils';
import {
  SignedInBusinessDto,
  SignedInShopDto,
} from '@wion-fnb/shared/components';
import {
  ShopUserDto,
  ShopUserGetListResponseDto,
} from '@wion-fnb/account/data-access';

export const provideWiContexts = () => [
  //   {
  //     provide: WI_SHOP_CONTEXT,
  //     useFactory: (signIn: WPSignInHandleService) => {
  //       const subject = new BehaviorSubject<WIShopIdentity | null>(null);
  //       signIn
  //         .getObsSignInEntityId()
  //         .subscribe((entity: SignedInShopDto | null) => {
  //           if (entity && entity.id != null && entity.tenantId != null) {
  //             subject.next({ shopId: entity.id, tenantId: entity.tenantId });
  //           } else {
  //             subject.next(null);
  //           }
  //         });
  //       return {
  //         get current() {
  //           return subject.value;
  //         },
  //         changes$: subject.asObservable(),
  //       };
  //     },
  //     deps: [WPSignInHandleService],
  //   },
  //   {
  //     provide: WI_BUSINESS_CONTEXT,
  //     useFactory: (signIn: WPSignInHandleService) => {
  //       const subject = new BehaviorSubject<SignedInBusinessDto | null>(null);
  //       signIn.getSignInDataObs().subscribe(subject);
  //       return {
  //         get hasActiveShop() {
  //           return subject.value?.hasActiveShop ?? false;
  //         },
  //         get isLocked() {
  //           return subject.value?.isLocked ?? false;
  //         },
  //         get isOwner() {
  //           return subject.value?.isOwner ?? false;
  //         },
  //         data$: subject.asObservable(),
  //       };
  //     },
  //     deps: [WPSignInHandleService],
  //   },
  //   {
  //     provide: WI_USER_CONTEXT,
  //     useFactory: (signIn: WPSignInHandleService) => {
  //       const userSubject = new BehaviorSubject<ShopUserDto | null>(null);
  //       signIn.getAccountUser().subscribe(userSubject);
  //       const listSubject =
  //         new BehaviorSubject<ShopUserGetListResponseDto | null>(null);
  //       signIn.getListShopUser().subscribe(listSubject);
  //       return {
  //         get currentUser() {
  //           return userSubject.value;
  //         },
  //         user$: userSubject.asObservable(),
  //         shopUserList$: listSubject.asObservable(),
  //       };
  //     },
  //     deps: [WPSignInHandleService],
  //   },
];
