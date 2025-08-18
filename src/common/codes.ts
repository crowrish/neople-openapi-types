/** HTTP 상태 코드 */
export enum HttpStatusCode {
  /** 요청 성공 */
  OK = 200,
  /** 잘못된 요청 */
  BAD_REQUEST = 400,
  /** 인증 실패 */
  UNAUTHORIZED = 401,
  /** 권한 없음 */
  FORBIDDEN = 403,
  /** 리소스를 찾을 수 없음 */
  NOT_FOUND = 404,
  /** 메서드 허용 안됨 */
  METHOD_NOT_ALLOWED = 405,
  /** 요청 한도 초과 */
  TOO_MANY_REQUESTS = 429,
  /** 서버 내부 오류 */
  INTERNAL_SERVER_ERROR = 500,
  /** 서비스 이용 불가 */
  SERVICE_UNAVAILABLE = 503,
}

/** 공통 API 에러 코드 */
export enum CommonApiErrorCode {
  /** API Key가 없음 */
  MISSING_API_KEY = 'API000',
  /** 잘못된 게임 ID */
  INVALID_GAME_ID = 'API001',
  /** API Key 사용량 초과 */
  API_KEY_USAGE_EXCEEDED = 'API002',
  /** 잘못된 API Key */
  INVALID_API_KEY = 'API003',
  /** 차단된 API Key */
  BLOCKED_API_KEY = 'API004',
  /** 게임별 API Key 오류 */
  INVALID_GAME_API_KEY = 'API005',
  /** 잘못된 HTTP 헤더 */
  INVALID_HTTP_HEADER = 'API006',
  /** 소켓 통신 오류 */
  SOCKET_COMMUNICATION_ERROR = 'API007',
  /** 잘못된 URL */
  INVALID_URL = 'API900',
  /** 잘못된 요청 파라미터 */
  INVALID_REQUEST_PARAMETERS = 'API901',
  /** 시스템 오류 */
  SYSTEM_ERROR = 'API999',
}

/** 던전앤파이터 에러 코드 */
export enum DnfErrorCode {
  /** 잘못된 서버 ID */
  INVALID_SERVER_ID = 'DNF000',
  /** 잘못된 캐릭터 정보 */
  INVALID_CHARACTER_INFO = 'DNF001',
  /** 잘못된 아이템 정보 */
  INVALID_ITEM_INFO = 'DNF003',
  /** 잘못된 경매장 정보 */
  INVALID_AUCTION_MARKET_INFO = 'DNF004',
  /** 잘못된 스킬 정보 */
  INVALID_SKILL_INFO = 'DNF005',
  /** 타임라인 검색 오류 */
  TIMELINE_SEARCH_ERROR = 'DNF006',
  /** 경매장 아이템 검색 한도 초과 */
  AUCTION_ITEM_SEARCH_LIMIT = 'DNF007',
  /** 멀티 아이템 검색 한도 초과 */
  MULTI_ITEM_SEARCH_LIMIT = 'DNF008',
  /** 아바타 마켓 타이틀 검색 한도 초과 */
  AVATAR_MARKET_TITLE_SEARCH_LIMIT = 'DNF009',
  /** 시스템 점검 */
  SYSTEM_MAINTENANCE = 'DNF980',
  /** 시스템 오류 */
  SYSTEM_ERROR = 'DNF999',
}

/** 사이퍼즈 에러 코드 */
export enum CyphersErrorCode {
  /** 매칭 검색 시간 오류 */
  MATCHING_SEARCH_TIME_ERROR = 'CY001',
  /** 잘못된 플레이어 정보 */
  INVALID_PLAYER_INFO = 'CY002',
  /** 잘못된 매치 정보 */
  INVALID_MATCH_INFO = 'CY003',
  /** 잘못된 아이템 정보 */
  INVALID_ITEM_INFO = 'CY004',
  /** 잘못된 포지션 정보 */
  INVALID_POSITION_INFO = 'CY005',
  /** 잘못된 캐릭터 정보 */
  INVALID_CHARACTER_INFO = 'CY006',
  /** 매칭 검색 한도 초과 */
  MATCHING_SEARCH_LIMIT = 'CY007',
  /** 랭킹 검색 한도 초과 */
  RANKING_SEARCH_LIMIT = 'CY008',
  /** 시스템 점검 */
  SYSTEM_MAINTENANCE = 'CY980',
  /** 시스템 오류 */
  SYSTEM_ERROR = 'CY999',
}

/** 모든 API 에러 코드 유니온 타입 */
export type ApiErrorCode = CommonApiErrorCode | DnfErrorCode | CyphersErrorCode;

/** HTTP 상태 코드와 에러 코드 매핑 */
export const HTTP_STATUS_TO_ERROR: Record<HttpStatusCode, string> = {
  [HttpStatusCode.OK]: '성공',
  [HttpStatusCode.BAD_REQUEST]: '잘못된 요청',
  [HttpStatusCode.UNAUTHORIZED]: '인증 실패',
  [HttpStatusCode.FORBIDDEN]: '권한 없음',
  [HttpStatusCode.NOT_FOUND]: '리소스를 찾을 수 없음',
  [HttpStatusCode.METHOD_NOT_ALLOWED]: '메서드 허용 안됨',
  [HttpStatusCode.TOO_MANY_REQUESTS]: '요청 한도 초과',
  [HttpStatusCode.INTERNAL_SERVER_ERROR]: '서버 내부 오류',
  [HttpStatusCode.SERVICE_UNAVAILABLE]: '서비스 이용 불가',
};

/** 에러 코드별 메시지 */
export const ERROR_MESSAGES: Record<string, string> = {
  // Common API Errors
  [CommonApiErrorCode.MISSING_API_KEY]: 'API Key가 없습니다',
  [CommonApiErrorCode.INVALID_GAME_ID]: '잘못된 게임 ID입니다',
  [CommonApiErrorCode.API_KEY_USAGE_EXCEEDED]: 'API Key 사용량을 초과했습니다',
  [CommonApiErrorCode.INVALID_API_KEY]: '잘못된 API Key입니다',
  [CommonApiErrorCode.BLOCKED_API_KEY]: '차단된 API Key입니다',
  [CommonApiErrorCode.INVALID_GAME_API_KEY]: '게임별 API Key가 잘못되었습니다',
  [CommonApiErrorCode.INVALID_HTTP_HEADER]: '잘못된 HTTP 헤더입니다',
  [CommonApiErrorCode.SOCKET_COMMUNICATION_ERROR]: '소켓 통신 오류입니다',
  [CommonApiErrorCode.INVALID_URL]: '잘못된 URL입니다',
  [CommonApiErrorCode.INVALID_REQUEST_PARAMETERS]: '잘못된 요청 파라미터입니다',
  [CommonApiErrorCode.SYSTEM_ERROR]: '시스템 오류입니다',

  // DNF Errors
  [DnfErrorCode.INVALID_SERVER_ID]: '잘못된 서버 ID입니다',
  [DnfErrorCode.INVALID_CHARACTER_INFO]: '잘못된 캐릭터 정보입니다',
  [DnfErrorCode.INVALID_ITEM_INFO]: '잘못된 아이템 정보입니다',
  [DnfErrorCode.INVALID_AUCTION_MARKET_INFO]: '잘못된 경매장 정보입니다',
  [DnfErrorCode.INVALID_SKILL_INFO]: '잘못된 스킬 정보입니다',
  [DnfErrorCode.TIMELINE_SEARCH_ERROR]: '타임라인 검색 오류입니다',
  [DnfErrorCode.AUCTION_ITEM_SEARCH_LIMIT]:
    '경매장 아이템 검색 한도를 초과했습니다',
  [DnfErrorCode.MULTI_ITEM_SEARCH_LIMIT]:
    '멀티 아이템 검색 한도를 초과했습니다',
  [DnfErrorCode.AVATAR_MARKET_TITLE_SEARCH_LIMIT]:
    '아바타 마켓 타이틀 검색 한도를 초과했습니다',
  [DnfErrorCode.SYSTEM_MAINTENANCE]: '시스템 점검 중입니다',
  [DnfErrorCode.SYSTEM_ERROR]: '시스템 오류입니다',

  // Cyphers Errors
  [CyphersErrorCode.MATCHING_SEARCH_TIME_ERROR]: '매칭 검색 시간 오류입니다',
  [CyphersErrorCode.INVALID_PLAYER_INFO]: '잘못된 플레이어 정보입니다',
  [CyphersErrorCode.INVALID_MATCH_INFO]: '잘못된 매치 정보입니다',
  [CyphersErrorCode.INVALID_ITEM_INFO]: '잘못된 아이템 정보입니다',
  [CyphersErrorCode.INVALID_POSITION_INFO]: '잘못된 포지션 정보입니다',
  [CyphersErrorCode.INVALID_CHARACTER_INFO]: '잘못된 캐릭터 정보입니다',
  [CyphersErrorCode.MATCHING_SEARCH_LIMIT]: '매칭 검색 한도를 초과했습니다',
  [CyphersErrorCode.RANKING_SEARCH_LIMIT]: '랭킹 검색 한도를 초과했습니다',
  [CyphersErrorCode.SYSTEM_MAINTENANCE]: '시스템 점검 중입니다',
  [CyphersErrorCode.SYSTEM_ERROR]: '시스템 오류입니다',
};
