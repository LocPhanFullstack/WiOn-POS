/* tslint:disable */
/* eslint-disable */
import { ExtensibleEntityDtoOfString } from '../models/extensible-entity-dto-of-string';
export type TenantDto = ExtensibleEntityDtoOfString & {
'name'?: string | null;
'creationTime'?: string;
'lastModificationTime'?: string;
'concurrencyStamp'?: string | null;
};
