/* tslint:disable */
/* eslint-disable */
import { RemoteServiceValidationErrorInfo } from '../models/remote-service-validation-error-info';
export interface RemoteServiceErrorInfo {
  code?: string | null;
  data?: Array<any> | null;
  details?: string | null;
  message?: string | null;
  validationErrors?: Array<RemoteServiceValidationErrorInfo> | null;
}
