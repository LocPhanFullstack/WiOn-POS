/* tslint:disable */
/* eslint-disable */
export interface CurrentUserDto {
  email?: string | null;
  emailVerified?: boolean;
  id?: string | null;
  impersonatorTenantId?: string | null;
  impersonatorTenantName?: string | null;
  impersonatorUserId?: string | null;
  impersonatorUserName?: string | null;
  isAuthenticated?: boolean;
  name?: string | null;
  phoneNumber?: string | null;
  phoneNumberVerified?: boolean;
  roles?: Array<string> | null;
  surName?: string | null;
  tenantId?: string | null;
  userName?: string | null;
}
