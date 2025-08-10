import { 
  PlayerSearchParams, 
  PlayerSearchResponse,
  PlayerInfoParams,
  PlayerMatchesParams,
  MatchDetailParams,
  OverallRankingParams,
  CharacterRankingParams,
  ItemSearchParams,
  ItemSearchResponse,
  PlayerEquipmentParams,
  CypherInfoParams,
  CypherInfoResponse,
  RecommendItemParams
} from './api';
import {
  PlayerInfo,
  PlayerMatches,
  MatchDetail,
  RankingInfo,
  PlayerEquipment,
  CypherRecommendItem
} from './index';

/** 사이퍼즈 API 클라이언트 인터페이스 */
export interface CyphersApiClient {
  /** 플레이어 검색 */
  searchPlayers(params: PlayerSearchParams): Promise<PlayerSearchResponse>;
  
  /** 플레이어 기본 정보 조회 */
  getPlayerInfo(params: PlayerInfoParams): Promise<PlayerInfo>;
  
  /** 플레이어 매치 기록 조회 */
  getPlayerMatches(params: PlayerMatchesParams): Promise<PlayerMatches>;
  
  /** 매치 상세 정보 조회 */
  getMatchDetail(params: MatchDetailParams): Promise<MatchDetail>;
  
  /** 전체 랭킹 조회 */
  getOverallRanking(params?: OverallRankingParams): Promise<RankingInfo>;
  
  /** 캐릭터별 랭킹 조회 */
  getCharacterRanking(params: CharacterRankingParams): Promise<RankingInfo>;
  
  /** 아이템 검색 */
  searchItems(params: ItemSearchParams): Promise<ItemSearchResponse>;
  
  /** 플레이어 장비 정보 조회 */
  getPlayerEquipment(params: PlayerEquipmentParams): Promise<PlayerEquipment>;
  
  /** 사이퍼(캐릭터) 정보 조회 */
  getCypherInfo(params?: CypherInfoParams): Promise<CypherInfoResponse>;
  
  /** 추천 아이템 조회 */
  getRecommendItems(params: RecommendItemParams): Promise<CypherRecommendItem>;
}

/** API 클라이언트 설정 */
export interface CyphersApiConfig {
  /** API 키 */
  apiKey: string;
  /** 기본 URL (기본값: https://api.neople.co.kr) */
  baseURL?: string;
  /** 요청 타임아웃 (기본값: 10000ms) */
  timeout?: number;
}

/** API 요청 옵션 */
export interface ApiRequestOptions {
  /** 요청 헤더 */
  headers?: Record<string, string>;
  /** 요청 타임아웃 */
  timeout?: number;
  /** 재시도 횟수 */
  retries?: number;
}

/** 사이퍼즈 API 엔드포인트 */
export const CYPHERS_API_ENDPOINTS = {
  /** 플레이어 검색 */
  PLAYER_SEARCH: '/cy/players',
  /** 플레이어 기본 정보 */
  PLAYER_INFO: '/cy/players/{playerId}',
  /** 플레이어 매치 기록 */
  PLAYER_MATCHES: '/cy/players/{playerId}/matches',
  /** 매치 상세 정보 */
  MATCH_DETAIL: '/cy/matches/{matchId}',
  /** 전체 랭킹 */
  OVERALL_RANKING: '/cy/ranking/ratingpoint',
  /** 캐릭터별 랭킹 */
  CHARACTER_RANKING: '/cy/ranking/characters/{characterId}/{rankingType}',
  /** 아이템 검색 */
  ITEM_SEARCH: '/cy/battleitems',
  /** 플레이어 장비 정보 */
  PLAYER_EQUIPMENT: '/cy/players/{playerId}/battleitems',
  /** 사이퍼 정보 */
  CYPHER_INFO: '/cy/characters',
  /** 추천 아이템 */
  RECOMMEND_ITEMS: '/cy/characters/{characterId}/items'
} as const;

export type CyphersApiEndpoint = typeof CYPHERS_API_ENDPOINTS[keyof typeof CYPHERS_API_ENDPOINTS];