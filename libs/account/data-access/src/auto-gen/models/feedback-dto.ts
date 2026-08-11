/* tslint:disable */
/* eslint-disable */
import { FeedbackRating } from '../models/feedback-rating';
export interface FeedbackDto {

  /**
   * Nhận xét của người dùng
   */
  comment?: string | null;

  /**
   * Cảm nhận
   */
  feeling?: Array<string> | null;

  /**
   * Ghi nhận từ quản lý ứng dụng, đã cải thiện hay chưa
   */
  isImproved?: boolean;

  /**
   * Xếp hạng
   */
  rating?: FeedbackRating;

  /**
   * Tên tài khoản người dùng
   */
  userName?: string | null;

  /**
   * Số điện thoại người dùng
   */
  userPhone?: string | null;
}
