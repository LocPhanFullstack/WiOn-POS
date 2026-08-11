/* tslint:disable */
/* eslint-disable */
import { FeatureProviderDto } from '../models/feature-provider-dto';
import { IStringValueType } from '../models/i-string-value-type';
export interface FeatureDto {
  depth?: number;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  parentName?: string | null;
  provider?: FeatureProviderDto | null;
  value?: string | null;
  valueType?: IStringValueType | null;
}
