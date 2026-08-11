/* tslint:disable */
/* eslint-disable */
import { PermissionDto } from '../models/permission-dto';
export interface FnbPermissionGroupDto {
  displayName?: string | null;
  name?: string | null;
  permissions?: Array<PermissionDto> | null;
}
