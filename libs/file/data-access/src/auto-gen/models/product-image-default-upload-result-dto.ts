/* tslint:disable */
/* eslint-disable */
import { MediaType } from '../models/media-type';
export interface ProductImageDefaultUploadResultDto {
  extension?: string | null;

  /**
   * Id của media
   */
  id?: number;

  /**
   * tên file người dùng upload
   */
  originalName?: string | null;

  /**
   * Path của hình ảnh trên file server
   */
  path?: string | null;
  productNameRecommends?: Array<string> | null;
  size?: number;

  /**
   * Loại tệp: 0: Image, 1: Video
   */
  type?: MediaType;

  /**
   * tên file upload lên server
   */
  uniqueName?: string | null;

  /**
   * url download của hình ảnh
   */
  url?: string | null;

  /**
   * url proxy của hình ảnh
   */
  urlImageProxy?: string | null;
  urlThumbnail?: string | null;
  urlThumbnailSizeL?: string | null;
  urlThumbnailSizeM?: string | null;
  urlThumbnailSizeS?: string | null;

  /**
   * Url proxy. XS: 64x64; S: 128x128; M: 256x256; L: 512x512
   */
  urlThumbnailSizeXS?: string | null;
}
