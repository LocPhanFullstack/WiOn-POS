/* tslint:disable */
/* eslint-disable */
import { UpdatePermissionsDto } from '../models/update-permissions-dto';
export type RoleWithPermissionsCreateDto = UpdatePermissionsDto & {

/**
 * Tên vai trò
 */
'name'?: string | null;

/**
 * Ghi chú
 */
'note'?: string | null;
};
