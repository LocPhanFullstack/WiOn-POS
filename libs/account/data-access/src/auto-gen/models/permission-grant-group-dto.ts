/* tslint:disable */
/* eslint-disable */
import { PermissionGrantDto } from '../models/permission-grant-dto';
export interface PermissionGrantGroupDto {
  displayName?: string | null;
  name?: string | null;
  permissions?: Array<Array<PermissionGrantDto>> | null;
}
