/* tslint:disable */
/* eslint-disable */
import { DateTimeFormatDto } from '../models/date-time-format-dto';
export interface CurrentCultureDto {
  cultureName?: string | null;
  dateTimeFormat?: DateTimeFormatDto | null;
  displayName?: string | null;
  englishName?: string | null;
  isRightToLeft?: boolean;
  name?: string | null;
  nativeName?: string | null;
  threeLetterIsoLanguageName?: string | null;
  twoLetterIsoLanguageName?: string | null;
}
