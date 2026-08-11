/* tslint:disable */
/* eslint-disable */
import { FeatureDto } from '../models/feature-dto';
export interface FeatureGroupDto {
  displayName?: string | null;
  features?: Array<FeatureDto> | null;
  name?: string | null;
}
