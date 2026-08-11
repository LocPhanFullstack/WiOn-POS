/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyDto } from '../models/extension-property-dto';
export interface EntityExtensionDto {
  configuration?: ({
[key: string]: any;
}) | null;
  properties?: ({
[key: string]: ExtensionPropertyDto;
}) | null;
}
