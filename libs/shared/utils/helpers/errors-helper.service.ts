import { TDSMessageService } from 'tds-ui/message';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { parseErrorMessage, StatusErrorPage } from './error-parser';

export type ErrorActionType = {
  status: StatusErrorPage;
  errorType?: number;
  isRefreshToken?: boolean;
  message?: string;
  shopName?: string;
  shopOwnerId?: string;
};

@Injectable({
  providedIn: 'root',
})
export class WPErrorsHelperService {
  private readonly _disconnectErrorObs = new BehaviorSubject<boolean | null>(
    null
  );
  private readonly _openModalObs = new BehaviorSubject<boolean>(false);
  public readonly errorSubject$ = new Subject<ErrorActionType>();
  private _offlineFlag = false;
  private _openModal = false;

  constructor(private tdsMessage: TDSMessageService) {}

  // kiểm tra lệnh mở modal, cho phép show thông báo, không điều hướng trang
  setOpenModal(openModal: boolean) {
    this._openModal = openModal;
    this._openModalObs.next(openModal);
  }

  getOpenModalObs() {
    return this._openModalObs.asObservable();
  }

  getOpenModal() {
    return this._openModal;
  }

  // kiểm tra lỗi mất kết nối
  setDisconnectErrorObs(offline: boolean) {
    this._offlineFlag = offline;
    this._disconnectErrorObs.next(offline);
  }

  getDisconnectErrorObs() {
    return this._disconnectErrorObs.asObservable();
  }

  getDisconnectErrorValue() {
    return this._offlineFlag;
  }

  setErrorAction(err: ErrorActionType) {
    this.errorSubject$.next(err);
  }

  getErrorAction() {
    return this.errorSubject$.asObservable();
  }
  showMessageError(
    error: HttpErrorResponse & { errorPage?: StatusErrorPage },
    defaultMessage?: string
  ) {
    const message = parseErrorMessage(error, defaultMessage);
    if (message) {
      this.tdsMessage.error(message);
    }
  }
}
