/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyUiFormDto } from '../models/extension-property-ui-form-dto';
import { ExtensionPropertyUiLookupDto } from '../models/extension-property-ui-lookup-dto';
import { ExtensionPropertyUiTableDto } from '../models/extension-property-ui-table-dto';
export interface ExtensionPropertyUiDto {
  lookup?: ExtensionPropertyUiLookupDto | null;
  onCreateForm?: ExtensionPropertyUiFormDto | null;
  onEditForm?: ExtensionPropertyUiFormDto | null;
  onTable?: ExtensionPropertyUiTableDto | null;
}
