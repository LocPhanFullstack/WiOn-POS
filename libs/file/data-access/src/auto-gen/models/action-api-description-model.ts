/* tslint:disable */
/* eslint-disable */
import { MethodParameterApiDescriptionModel } from '../models/method-parameter-api-description-model';
import { ParameterApiDescriptionModel } from '../models/parameter-api-description-model';
import { ReturnValueApiDescriptionModel } from '../models/return-value-api-description-model';
export interface ActionApiDescriptionModel {
  allowAnonymous?: boolean | null;
  httpMethod?: string | null;
  implementFrom?: string | null;
  name?: string | null;
  parameters?: Array<ParameterApiDescriptionModel> | null;
  parametersOnMethod?: Array<MethodParameterApiDescriptionModel> | null;
  returnValue?: ReturnValueApiDescriptionModel | null;
  supportedVersions?: Array<string> | null;
  uniqueName?: string | null;
  url?: string | null;
}
