/* tslint:disable */
/* eslint-disable */
import { UserInvitationDto } from '../models/user-invitation-dto';
export interface BusinessInvitationDto {
  businessId?: number;
  businessName?: string | null;
  tenantId?: string | null;
  userInvitations?: Array<UserInvitationDto> | null;
}
