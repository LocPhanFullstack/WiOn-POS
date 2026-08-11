/* tslint:disable */
/* eslint-disable */
import { PropertyApiDescriptionModel } from '../models/property-api-description-model';
export interface TypeApiDescriptionModel {
  baseType?: string | null;
  enumNames?: Array<string> | null;
  enumValues?: Array<any> | null;
  genericArguments?: Array<string> | null;
  isEnum?: boolean;
  properties?: Array<PropertyApiDescriptionModel> | null;
}
