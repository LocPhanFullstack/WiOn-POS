/* tslint:disable */
/* eslint-disable */
import { PermissionGrantDto } from '../models/permission-grant-dto';
export interface FnbPermissionGrantGroupDto {
  displayName?: string | null;
  name?: string | null;
  permissions?: Array<PermissionGrantDto> | null;
}
