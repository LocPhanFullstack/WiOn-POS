/* tslint:disable */
/* eslint-disable */
import { CurrentCultureDto } from '../models/current-culture-dto';
import { LanguageInfo } from '../models/language-info';
import { NameValue } from '../models/name-value';
export interface ApplicationLocalizationConfigurationDto {
  currentCulture?: CurrentCultureDto | null;
  defaultResourceName?: string | null;
  languageFilesMap?: ({
[key: string]: Array<NameValue>;
}) | null;
  languages?: Array<LanguageInfo> | null;
  languagesMap?: ({
[key: string]: Array<NameValue>;
}) | null;
  values?: ({
[key: string]: {
[key: string]: string;
};
}) | null;
}
