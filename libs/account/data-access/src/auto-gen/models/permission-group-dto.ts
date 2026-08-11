/* tslint:disable */
/* eslint-disable */
import { PermissionDto } from '../models/permission-dto';
export interface PermissionGroupDto {
  displayName?: string | null;
  name?: string | null;
  permissions?: Array<Array<PermissionDto>> | null;
}
