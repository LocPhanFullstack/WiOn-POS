/* tslint:disable */
/* eslint-disable */
import { IanaTimeZone } from '../models/iana-time-zone';
import { WindowsTimeZone } from '../models/windows-time-zone';
export interface TimeZone {
  iana?: IanaTimeZone | null;
  windows?: WindowsTimeZone | null;
}
