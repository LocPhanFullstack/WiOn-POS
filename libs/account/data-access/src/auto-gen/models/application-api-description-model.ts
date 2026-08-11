/* tslint:disable */
/* eslint-disable */
import { ModuleApiDescriptionModel } from '../models/module-api-description-model';
import { TypeApiDescriptionModel } from '../models/type-api-description-model';
export interface ApplicationApiDescriptionModel {
  modules?: ({
[key: string]: ModuleApiDescriptionModel;
}) | null;
  types?: ({
[key: string]: TypeApiDescriptionModel;
}) | null;
}
