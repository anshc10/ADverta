export * from './company';
export * from './form';
export * from './route';
export * from './service';
export * from './testimonial';
export * from './theme';

export interface BaseResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends BaseResponse {
  data: T[];
  total: number;
  page: number;
  limit: number;
}