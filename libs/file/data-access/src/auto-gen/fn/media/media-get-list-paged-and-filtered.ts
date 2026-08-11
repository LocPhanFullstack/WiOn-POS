/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FNBFileStrictHttpResponse } from '../../fnb-file-strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MediaPagedAndFilteredResultDto } from '../../models/media-paged-and-filtered-result-dto';
import { MediaType } from '../../models/media-type';

export interface MediaGetListPagedAndFiltered$Params {

/**
 * 0: Image, 1: Video, default: all
 */
  Type?: MediaType | null;
  SearchText?: string | null;
  Sorting?: string | null;
  SkipCount?: number;
  MaxResultCount?: number;
}

export function mediaGetListPagedAndFiltered(http: HttpClient, rootUrl: string, params?: MediaGetListPagedAndFiltered$Params, context?: HttpContext): Observable<FNBFileStrictHttpResponse<MediaPagedAndFilteredResultDto>> {
  const rb = new RequestBuilder(rootUrl, mediaGetListPagedAndFiltered.PATH, 'get');
  if (params) {
    rb.query('Type', params.Type, {});
    rb.query('SearchText', params.SearchText, {});
    rb.query('Sorting', params.Sorting, {});
    rb.query('SkipCount', params.SkipCount, {});
    rb.query('MaxResultCount', params.MaxResultCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as FNBFileStrictHttpResponse<MediaPagedAndFilteredResultDto>;
    })
  );
}

mediaGetListPagedAndFiltered.PATH = '/api/v1/media/paged-and-filtered';
