/* tslint:disable */
/* eslint-disable */
import { ExtensionEnumDto } from '../models/extension-enum-dto';
import { ModuleExtensionDto } from '../models/module-extension-dto';
export interface ObjectExtensionsDto {
  enums?: ({
[key: string]: ExtensionEnumDto;
}) | null;
  modules?: ({
[key: string]: ModuleExtensionDto;
}) | null;
}
