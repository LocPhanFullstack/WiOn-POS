/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Inject,inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FNBAccountBaseService } from '../fnb-account-base-service';
import { FNBAccountApiConfiguration, FNBAccountApiConfigurationToken } from '../fnb-account-api-configuration';
import { FNBAccountStrictHttpResponse } from '../fnb-account-strict-http-response';

import { feedbackCreate } from '../fn/feedback/feedback-create';
import { FeedbackCreate$Params } from '../fn/feedback/feedback-create';
import { FeedbackDto } from '../models/feedback-dto';
import { feedbackGetList } from '../fn/feedback/feedback-get-list';
import { FeedbackGetList$Params } from '../fn/feedback/feedback-get-list';

@Injectable()
export class FeedbackService extends FNBAccountBaseService {
  override config: FNBAccountApiConfiguration = inject(FNBAccountApiConfigurationToken);
  override http: HttpClient = inject(HttpClient);

  /** Path part for operation `feedbackGetList()` */
  static readonly FeedbackGetListPath = '/api/v1/feedbacks';

  /**
   * Lấy danh sách phản hồi.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `feedbackGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  feedbackGetList$Response(params?: FeedbackGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FeedbackDto>>> {
    return feedbackGetList(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách phản hồi.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `feedbackGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  feedbackGetList(params?: FeedbackGetList$Params, context?: HttpContext): Observable<Array<FeedbackDto>> {
    return this.feedbackGetList$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<Array<FeedbackDto>>): Array<FeedbackDto> => r.body)
    );
  }

  /** Path part for operation `feedbackCreate()` */
  static readonly FeedbackCreatePath = '/api/v1/feedbacks';

  /**
   * Thêm phản hồi.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `feedbackCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  feedbackCreate$Response(params: FeedbackCreate$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<void>> {
    return feedbackCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm phản hồi.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `feedbackCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  feedbackCreate(params: FeedbackCreate$Params, context?: HttpContext): Observable<void> {
    return this.feedbackCreate$Response(params, context).pipe(
      map((r: FNBAccountStrictHttpResponse<void>): void => r.body)
    );
  }

}
