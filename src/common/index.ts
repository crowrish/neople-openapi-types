/** 네오플 API 공통 응답 구조 */
export interface ApiResponse<T> {
  /** 응답 데이터 배열 */
  rows: T[];
  /** 다음 페이지 조회를 위한 토큰 */
  next?: string;
}

/** 네오플 API 에러 응답 */
export interface ApiError {
  /** 에러 상세 정보 */
  error: {
    /** HTTP 상태 코드 */
    status: number;
    /** 에러 이름 */
    name: string;
    /** 에러 메시지 */
    message: string;
  };
}

/** 페이지네이션 파라미터 */
export interface PaginationParams {
  /** 조회할 최대 개수 */
  limit?: number;
  /** 다음 페이지 조회를 위한 토큰 */
  next?: string;
}

/** API 요청 기본 옵션 */
export interface ApiRequestOptions extends PaginationParams {
  /** 검색 타입 ('full': 완전일치, 'match': 부분일치) */
  wordType?: 'full' | 'match';
}

export * from './servers';
export * from './codes';
export * from './errors';

// 유틸리티 타입들
/**
 * 선택적 필드를 필수로 만드는 유틸리티 타입
 * @template T - 원본 타입
 * @template K - 필수로 만들 키들
 */
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * 특정 필드만 선택하는 유틸리티 타입
 * @template T - 원본 타입
 * @template K - 선택할 키들
 */
export type SelectFields<T, K extends keyof T> = Pick<T, K>;

/**
 * 날짜 문자열 타입 (YYYY-MM-DD 형식)
 * @example "2024-01-19"
 */
export type DateString = string;

/**
 * 시간 문자열 타입 (YYYY-MM-DD HH:mm:ss 형식)
 * @example "2024-01-19 15:30:45"
 */
export type DateTimeString = string;
