import { ApiResponse, PaginationParams } from '../common';

/** 플레이어 검색 API 파라미터
 * @endpoint GET /cy/players?nickname={nickname}&wordType={wordType}&limit={limit}
 */
export interface PlayerSearchParams {
  /** 플레이어 닉네임 */
  nickname: string;
  /** 검색 방식 - match: 부분일치, full: 완전일치 */
  wordType?: 'match' | 'full';
  /** 결과 개수 제한 (최대 200, 기본 10) */
  limit?: number;
}

/** 플레이어 검색 응답 */
export interface PlayerSearchResponse extends ApiResponse<PlayerSearchResult> {}

/** 플레이어 검색 결과 */
export interface PlayerSearchResult {
  playerId: string;
  nickname: string;
  grade: number;
  clanName?: string;
}

/** 플레이어 정보 조회 파라미터
 * @endpoint GET /cy/players/{playerId}
 */
export interface PlayerInfoParams {
  /** 플레이어 ID */
  playerId: string;
}

/** 플레이어 매치 기록 조회 파라미터
 * @endpoint GET /cy/players/{playerId}/matches?gameTypeId={gameTypeId}&startDate={startDate}&endDate={endDate}&limit={limit}&next={next}
 */
export interface PlayerMatchesParams extends PaginationParams {
  /** 플레이어 ID */
  playerId: string;
  /** 게임 타입 ID - rating: 랭킹, normal: 일반 */
  gameTypeId?: 'rating' | 'normal';
  /** 조회 시작 날짜 (YYYY-MM-DD) */
  startDate?: string;
  /** 조회 종료 날짜 (YYYY-MM-DD) */
  endDate?: string;
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 매치 상세 정보 조회 파라미터
 * @endpoint GET /cy/matches/{matchId}
 */
export interface MatchDetailParams {
  /** 매치 ID */
  matchId: string;
}

/** 랭킹 조회 기본 파라미터 */
export interface RankingParams {
  /** 특정 플레이어 ID (선택) */
  playerId?: string;
  /** 시작 순위 (기본 0) */
  offset?: number;
  /** 결과 개수 제한 (최대 1000, 기본 10) */
  limit?: number;
}

/** 전체 랭킹 조회 파라미터
 * @endpoint GET /cy/ranking/ratingpoint?playerId={playerId}&offset={offset}&limit={limit}
 */
export interface OverallRankingParams extends RankingParams {}

/** 캐릭터별 랭킹 조회 파라미터
 * @endpoint GET /cy/ranking/characters/{characterId}/{rankingType}?playerId={playerId}&offset={offset}&limit={limit}
 */
export interface CharacterRankingParams extends RankingParams {
  /** 캐릭터 ID */
  characterId: string;
  /** 랭킹 타입 */
  rankingType: 'winCount' | 'winRate' | 'killCount' | 'assistCount' | 'exp';
}

/** 아이템 검색 파라미터
 * @endpoint GET /cy/battleitems?itemName={itemName}&wordType={wordType}&characterId={characterId}&slotCode={slotCode}&rarityCode={rarityCode}&seasonCode={seasonCode}&limit={limit}
 */
export interface ItemSearchParams {
  /** 아이템 이름 */
  itemName: string;
  /** 검색 방식 - match: 부분일치, front: 시작일치, full: 완전일치 */
  wordType?: 'match' | 'front' | 'full';
  /** 캐릭터 ID (선택) */
  characterId?: string;
  /** 슬롯 코드 (선택) */
  slotCode?: string;
  /** 희귀도 코드 (선택) */
  rarityCode?: string;
  /** 시즌 코드 (선택) */
  seasonCode?: string;
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 아이템 검색 응답 */
export interface ItemSearchResponse extends ApiResponse<ItemSearchResult> {}

/** 아이템 검색 결과 */
export interface ItemSearchResult {
  itemId: string;
  itemName: string;
  slotCode: string;
  rarityCode: string;
  equipSlotCode: string;
  itemTypeCode: string;
  seasonCode: string;
}

/** 사이퍼 정보 조회 파라미터
 * @endpoint GET /cy/characters?characterId={characterId}&wordType={wordType}&limit={limit}
 */
export interface CypherInfoParams {
  /** 캐릭터 ID (선택) */
  characterId?: string;
  /** 검색어 (선택) */
  wordType?: 'match' | 'front' | 'full';
  /** 결과 개수 제한 (최대 200, 기본 10) */
  limit?: number;
}

/** 사이퍼 검색 응답 */
export interface CypherInfoResponse extends ApiResponse<CypherSearchResult> {}

/** 사이퍼 검색 결과 */
export interface CypherSearchResult {
  characterId: string;
  characterName: string;
  school: string;
  mastery: string;
  weapon: string;
  attackType: string;
  position: string;
}

/** 투신전 랭킹 조회 파라미터
 * @endpoint GET /cy/ranking/tsj/{tsjType}?limit={limit}&offset={offset}&playerId={playerId}
 */
export interface TSJRankingParams extends RankingParams {
  /** 투신전 타입 - melee: 격투, ranged: 파 */
  tsjType: 'melee' | 'ranged';
}

/** 투신전 랭킹 응답 */
export interface TSJRankingResponse extends ApiResponse<TSJRankingResult> {}

/** 투신전 랭킹 결과 */
export interface TSJRankingResult {
  /** 순위 */
  rank: number;
  /** 이전 순위 */
  beforeRank: number;
  /** 플레이어 ID */
  playerId: string;
  /** 닉네임 */
  nickname: string;
  /** 랭킹 포인트 */
  ratingPoint: number;
  /** 승수 */
  winCount: number;
  /** 패수 */
  loseCount: number;
  /** 연승 기록 */
  winningStreak: number;
}

/** 아이템 상세 정보 조회 파라미터
 * @endpoint GET /cy/battleitems/{itemId}
 */
export interface ItemDetailParams {
  /** 아이템 ID */
  itemId: string;
}

/** 아이템 상세 정보 응답 */
export interface ItemDetailResponse {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 캐릭터 ID */
  characterId: string;
  /** 캐릭터명 */
  characterName: string;
  /** 희귀도 코드 */
  rarityCode: string;
  /** 희귀도명 */
  rarityName: string;
  /** 슬롯 코드 */
  slotCode: string;
  /** 슬롯명 */
  slotName: string;
  /** 시즌 코드 */
  seasonCode: string;
  /** 시즌명 */
  seasonName: string;
  /** 아이템 설명 */
  explain: string;
  /** 아이템 상세 설명 (레벨별 효과) */
  explainDetail: string;
}

/** 다중 아이템 상세 정보 조회 파라미터
 * @endpoint GET /cy/multi/battleitems?itemIds={itemIds}
 */
export interface MultiItemParams {
  /** 쉼표로 구분된 아이템 ID 목록 */
  itemIds: string;
}

/** 다중 아이템 상세 정보 응답 */
export interface MultiItemResponse extends ApiResponse<ItemDetailResponse> {}
