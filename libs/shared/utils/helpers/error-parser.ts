import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { HttpErrorResponse } from '@angular/common/http';
import { blob2jsonFn } from './blob2json';

export type StatusErrorPage =
  | 'disconnect'
  | 'reconnect'
  | 'internal-server'
  | 'gateway-timeout'
  | 'forbidden'
  | 'unauthorized'
  | 'unknow';

export function parseErrorMessage(
  error: HttpErrorResponse & { errorPage?: StatusErrorPage },
  defaultMessage?: string
): string | null {
  if (error.errorPage) return null;
  if (error && error.status > 0 && error.status < 500) {
    if (error.error instanceof Blob) {
      try {
        const json = blob2jsonFn(error.error);
        if (TDSHelperString.hasValueString(json?.error?.message)) {
          return json?.error?.message;
        }

        if (TDSHelperString.hasValueString(json?.message)) {
          return json?.message;
        } else {
          return defaultMessage ?? 'Hệ thống đã xảy ra lỗi';
        }
      } catch {
        return null;
      }
    }

    if (typeof error?.error === 'string') {
      try {
        const json = JSON.parse(error.error);
        if (TDSHelperString.hasValueString(json?.error?.message)) {
          return json?.error?.message;
        }

        if (TDSHelperString.hasValueString(json?.message)) {
          return json?.message;
        } else {
          return defaultMessage ?? 'Hệ thống đã xãy ra lỗi';
        }
      } catch {
        return null;
      }
    } else {
      if (typeof error?.error?.error?.message === 'string') {
        return error.error.error.message;
      }

      if (typeof error?.error?.message === 'string') {
        return error.error.message;
      }

      if (typeof error?.message === 'string') {
        return error.message;
      }
    }
    return defaultMessage ?? 'Hệ thống đã xãy ra lỗi';
  } else {
    return null;
  }
}

export function parseErrorBody(error: HttpErrorResponse): TDSSafeAny {
  if (!error) return null;

  if (error.error instanceof Blob) {
    try {
      return blob2jsonFn(error.error);
    } catch {
      return null;
    }
  }

  if (typeof error.error === 'string') {
    try {
      return JSON.parse(error.error);
    } catch {
      return null;
    }
  } else {
    return error.error;
  }
}

export function parseErrorCode(error: HttpErrorResponse): string | null {
  if (!error) return null;

  if (error.error instanceof Blob) {
    try {
      const json = blob2jsonFn(error.error);
      if (TDSHelperString.hasValueString(json?.error?.code)) {
        return json?.error?.code;
      }

      if (TDSHelperString.hasValueString(json?.code)) {
        return json?.code;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }

  if (typeof error.error === 'string') {
    try {
      const json = JSON.parse(error.error);
      if (TDSHelperString.hasValueString(json?.error?.code)) {
        return json?.error?.code;
      }

      if (TDSHelperString.hasValueString(json?.code)) {
        return json?.code;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  } else {
    if (typeof error?.error?.error?.code === 'string') {
      return error.error.error.code;
    }

    if (typeof error?.error?.code === 'string') {
      return error.error.code;
    }

    return null;
  }
}
