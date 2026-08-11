/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBAccountStrictHttpResponse } from '../../fnb-account-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FeedbackDto } from '../../models/feedback-dto';

export interface FeedbackGetList$Params {
}

export function feedbackGetList(http: HttpClient, rootUrl: string, params?: FeedbackGetList$Params, context?: HttpContext): Observable<FNBAccountStrictHttpResponse<Array<FeedbackDto>>> {
  const rb = new RequestBuilder(rootUrl, feedbackGetList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBAccountStrictHttpResponse<Array<FeedbackDto>>;
    })
  );
}

feedbackGetList.PATH = '/api/v1/feedbacks';
