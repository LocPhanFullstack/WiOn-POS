/* tslint:disable */
/* eslint-disable */
import { FeedbackRating } from '../models/feedback-rating';
export interface FeedbackCreateDto {

  /**
   * Nhận xét của người dùng
   */
  comment?: string | null;

  /**
   * Cảm nhận
   */
  feeling?: Array<string> | null;

  /**
   * Xếp hạng
   */
  rating?: FeedbackRating;
}
