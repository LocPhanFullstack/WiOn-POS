/* tslint:disable */
/* eslint-disable */
import { ActionApiDescriptionModel } from '../models/action-api-description-model';
import { ControllerInterfaceApiDescriptionModel } from '../models/controller-interface-api-description-model';
export interface ControllerApiDescriptionModel {
  actions?: ({
[key: string]: ActionApiDescriptionModel;
}) | null;
  apiVersion?: string | null;
  controllerGroupName?: string | null;
  controllerName?: string | null;
  interfaces?: Array<ControllerInterfaceApiDescriptionModel> | null;
  isRemoteService?: boolean;
  type?: string | null;
}
