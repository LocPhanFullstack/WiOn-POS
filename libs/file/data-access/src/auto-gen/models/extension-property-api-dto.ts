/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyApiCreateDto } from '../models/extension-property-api-create-dto';
import { ExtensionPropertyApiGetDto } from '../models/extension-property-api-get-dto';
import { ExtensionPropertyApiUpdateDto } from '../models/extension-property-api-update-dto';
export interface ExtensionPropertyApiDto {
  onCreate?: ExtensionPropertyApiCreateDto | null;
  onGet?: ExtensionPropertyApiGetDto | null;
  onUpdate?: ExtensionPropertyApiUpdateDto | null;
}
