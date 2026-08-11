/* tslint:disable */
/* eslint-disable */
import { ControllerApiDescriptionModel } from '../models/controller-api-description-model';
export interface ModuleApiDescriptionModel {
  controllers?: ({
[key: string]: ControllerApiDescriptionModel;
}) | null;
  remoteServiceName?: string | null;
  rootPath?: string | null;
}
