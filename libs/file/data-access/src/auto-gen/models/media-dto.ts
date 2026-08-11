/* tslint:disable */
/* eslint-disable */
import { MediaType } from '../models/media-type';
export interface MediaDto {

  /**
   * Ngày tải hình lên
   */
  creationTime?: string;

  /**
   * đuôi file
   */
  extension?: string | null;

  /**
   * Id của media
   */
  id?: number;

  /**
   * kích thước file
   */
  size?: number;

  /**
   * 0: Image, 1: Video
   */
  type?: MediaType;

  /**
   * tên file upload lên server
   */
  uniqueName?: string | null;

  /**
   * url download của file
   */
  url?: string | null;

  /**
   * url proxy của hình ảnh
   */
  urlImageProxy?: string | null;
  urlThumbnailSizeL?: string | null;
  urlThumbnailSizeM?: string | null;
  urlThumbnailSizeS?: string | null;
  urlThumbnailSizeXS?: string | null;
}
