/* tslint:disable */
/* eslint-disable */
import { MediaDto } from '../models/media-dto';
export interface MediaPagedAndFilteredResultDto {

  /**
   * Số lượng kết quả của tìm kiếm
   */
  currentCount?: number;

  /**
   * Danh sách sản phẩm
   */
  items?: Array<MediaDto> | null;

  /**
   * Tổng số lượng kết quả không phân trang
   */
  total?: number;
}
