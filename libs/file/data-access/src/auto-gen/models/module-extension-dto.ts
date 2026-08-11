/* tslint:disable */
/* eslint-disable */
import { EntityExtensionDto } from '../models/entity-extension-dto';
export interface ModuleExtensionDto {
  configuration?: ({
[key: string]: any;
}) | null;
  entities?: ({
[key: string]: EntityExtensionDto;
}) | null;
}
