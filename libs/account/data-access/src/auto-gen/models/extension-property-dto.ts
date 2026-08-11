/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyApiDto } from '../models/extension-property-api-dto';
import { ExtensionPropertyAttributeDto } from '../models/extension-property-attribute-dto';
import { ExtensionPropertyUiDto } from '../models/extension-property-ui-dto';
import { LocalizableStringDto } from '../models/localizable-string-dto';
export interface ExtensionPropertyDto {
  api?: ExtensionPropertyApiDto | null;
  attributes?: Array<ExtensionPropertyAttributeDto> | null;
  configuration?: ({
[key: string]: any;
}) | null;
  defaultValue?: any | null;
  displayName?: LocalizableStringDto | null;
  type?: string | null;
  typeSimple?: string | null;
  ui?: ExtensionPropertyUiDto | null;
}
