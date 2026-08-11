/* tslint:disable */
/* eslint-disable */
import { SocialKind } from '../models/social-kind';
export interface SocialAccountAuthenDto {
  kind?: SocialKind;
  token?: string | null;
}
