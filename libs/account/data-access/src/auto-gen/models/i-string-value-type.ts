/* tslint:disable */
/* eslint-disable */
import { IValueValidator } from '../models/i-value-validator';
export interface IStringValueType {
  name?: string | null;
  properties?: ({
[key: string]: any;
}) | null;
  validator?: IValueValidator | null;
}
