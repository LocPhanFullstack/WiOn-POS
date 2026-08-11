/* tslint:disable */
/* eslint-disable */
import { ApplicationAuthConfigurationDto } from '../models/application-auth-configuration-dto';
import { ApplicationFeatureConfigurationDto } from '../models/application-feature-configuration-dto';
import { ApplicationLocalizationConfigurationDto } from '../models/application-localization-configuration-dto';
import { ApplicationSettingConfigurationDto } from '../models/application-setting-configuration-dto';
import { ClockDto } from '../models/clock-dto';
import { CurrentTenantDto } from '../models/current-tenant-dto';
import { CurrentUserDto } from '../models/current-user-dto';
import { MultiTenancyInfoDto } from '../models/multi-tenancy-info-dto';
import { ObjectExtensionsDto } from '../models/object-extensions-dto';
import { TimingDto } from '../models/timing-dto';
export interface ApplicationConfigurationDto {
  auth?: ApplicationAuthConfigurationDto | null;
  clock?: ClockDto | null;
  currentTenant?: CurrentTenantDto | null;
  currentUser?: CurrentUserDto | null;
  features?: ApplicationFeatureConfigurationDto | null;
  localization?: ApplicationLocalizationConfigurationDto | null;
  multiTenancy?: MultiTenancyInfoDto | null;
  objectExtensions?: ObjectExtensionsDto | null;
  setting?: ApplicationSettingConfigurationDto | null;
  timing?: TimingDto | null;
}
