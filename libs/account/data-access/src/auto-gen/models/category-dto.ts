/* tslint:disable */
/* eslint-disable */
import { EntityDtoOfLong } from '../models/entity-dto-of-long';
export type CategoryDto = EntityDtoOfLong & {

/**
 * Tên
 */
'name'?: string | null;

/**
 * Tên biểu tượng hiển thị trên giao diện
 */
'icon'?: string | null;
};
