import { HttpStatusCode, ApiErrorCode, ERROR_MESSAGES } from './codes';

/** 네오플 API 에러 인터페이스 */
export interface NeopleApiError extends Error {
  /** HTTP 상태 코드 */
  status: HttpStatusCode;
  /** 에러 코드 */
  code: ApiErrorCode;
  /** 에러 이름 */
  name: string;
}

/** 네오플 API 예외 클래스 */
export class NeopleApiException extends Error implements NeopleApiError {
  constructor(
    message: string,
    public status: HttpStatusCode,
    public code: ApiErrorCode,
    public name: string = 'NeopleApiException'
  ) {
    super(message || ERROR_MESSAGES[code] || '알 수 없는 오류');
    this.name = name;
  }

  /** 에러 코드로부터 NeopleApiException 생성 */
  static fromCode(
    code: ApiErrorCode,
    status: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
    customMessage?: string
  ): NeopleApiException {
    const message = customMessage || ERROR_MESSAGES[code] || '알 수 없는 오류';
    return new NeopleApiException(message, status, code);
  }

  /** HTTP 상태 코드로부터 기본 에러 생성 */
  static fromHttpStatus(
    status: HttpStatusCode,
    message?: string
  ): NeopleApiException {
    return new NeopleApiException(
      message || '알 수 없는 오류',
      status,
      'SYSTEM_ERROR' as ApiErrorCode
    );
  }
}

/** 에러 응답 파싱 유틸리티 */
export function parseApiError(error: any): NeopleApiError {
  if (error instanceof NeopleApiException) {
    return error;
  }

  const status =
    error.status ||
    error.response?.status ||
    HttpStatusCode.INTERNAL_SERVER_ERROR;
  const code =
    error.code || error.response?.data?.error?.code || 'SYSTEM_ERROR';
  const message =
    error.message ||
    error.response?.data?.error?.message ||
    ERROR_MESSAGES[code] ||
    '알 수 없는 오류';

  return new NeopleApiException(message, status, code as ApiErrorCode);
}

/** 에러가 특정 코드인지 확인 */
export function isErrorCode(error: any, code: ApiErrorCode): boolean {
  const apiError = parseApiError(error);
  return apiError.code === code;
}

/** 에러가 시스템 점검 상태인지 확인 */
export function isMaintenanceError(error: any): boolean {
  return (
    isErrorCode(error, 'DNF980' as ApiErrorCode) ||
    isErrorCode(error, 'CY980' as ApiErrorCode)
  );
}

/** 에러가 API 키 관련 문제인지 확인 */
export function isApiKeyError(error: any): boolean {
  const apiError = parseApiError(error);
  return ['API000', 'API003', 'API004', 'API005'].includes(apiError.code);
}

/** 에러가 요청 한도 초과인지 확인 */
export function isRateLimitError(error: any): boolean {
  const apiError = parseApiError(error);
  return (
    apiError.status === HttpStatusCode.TOO_MANY_REQUESTS ||
    apiError.code === 'API002' ||
    ['DNF007', 'DNF008', 'DNF009', 'CY007', 'CY008'].includes(apiError.code)
  );
}
