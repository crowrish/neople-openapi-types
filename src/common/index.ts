/** 네오플 API 공통 응답 구조 */
export interface ApiResponse<T> {
  rows: T[];
  next?: string;
}

/** 네오플 API 에러 응답 */
export interface ApiError {
  error: {
    status: number;
    name: string;
    message: string;
  };
}

/** 페이지네이션 파라미터 */
export interface PaginationParams {
  limit?: number;
  next?: string;
}

/** API 요청 기본 옵션 */
export interface ApiRequestOptions extends PaginationParams {
  wordType?: 'full' | 'match';
}

export * from './servers';
export * from './codes';
export * from './errors';

// 유틸리티 타입들
/** 선택적 필드를 필수로 만드는 유틸리티 타입 */
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** 특정 필드만 선택하는 유틸리티 타입 */
export type SelectFields<T, K extends keyof T> = Pick<T, K>;

/** 날짜 문자열 타입 (YYYY-MM-DD 형식) */
export type DateString = string;

/** 시간 문자열 타입 (YYYY-MM-DD HH:mm:ss 형식) */
export type DateTimeString = string;