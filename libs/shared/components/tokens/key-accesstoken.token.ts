import { InjectionToken } from "@angular/core";
export const FNBKEY_ACCESSTOKEN = new InjectionToken<string>('FNBKEY_ACCESSTOKEN', {
  providedIn: 'root',
  factory: () => 'wionfnb:accesstoken'
});