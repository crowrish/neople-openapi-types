import { ApiResponse, PaginationParams, DFServer } from '../common';
import { DFItemRarity } from './enums';

/** 캐릭터 검색 API 파라미터
 * @endpoint GET /df/servers/{serverId}/characters?characterName={characterName}&wordType={wordType}&limit={limit}
 */
export interface CharacterSearchParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 이름 */
  characterName: string;
  /** 검색 방식 - match: 부분일치, full: 완전일치 */
  wordType?: 'match' | 'full';
  /** 결과 개수 제한 (최대 200, 기본 10) */
  limit?: number;
}

/** 캐릭터 기본 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}
 */
export interface CharacterBasicParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 능력치 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/status
 */
export interface CharacterStatusParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 장비 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/equip/equipment
 */
export interface CharacterEquipmentParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 아바타 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/equip/avatar
 */
export interface CharacterAvatarParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 크리처 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/equip/creature
 */
export interface CharacterCreatureParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 국기 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/equip/flag
 */
export interface CharacterFlagParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 탈리스만 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/equip/talisman
 */
export interface CharacterTalismanParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 스킬 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/skill/style
 */
export interface CharacterSkillParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 버프 정보 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/skill/buff
 */
export interface CharacterBuffParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 아이템 검색 파라미터
 * @endpoint GET /df/items?itemName={itemName}&wordType={wordType}&q={q}&limit={limit}
 */
export interface ItemSearchParams {
  /** 아이템 이름 */
  itemName?: string;
  /** 검색 방식 - match: 부분일치, full: 완전일치, front: 시작일치 */
  wordType?: 'match' | 'full' | 'front';
  /** 추가 검색 쿼리 */
  q?: string;
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 아이템 상세 정보 조회 파라미터
 * @endpoint GET /df/items/{itemId}
 */
export interface ItemDetailParams {
  /** 아이템 ID */
  itemId: string;
}

/** 세트 아이템 정보 조회 파라미터
 * @endpoint GET /df/setitems/{setItemId}
 */
export interface SetItemInfoParams {
  /** 세트 아이템 ID */
  setItemId: string;
}

/** 멀티 아이템 정보 조회 파라미터
 * @endpoint GET /df/multi/{itemId}
 */
export interface MultiItemInfoParams {
  /** 아이템 ID */
  itemId: string;
}

/** 경매장 검색 파라미터
 * @endpoint GET /df/auction?itemId={itemId}&itemName={itemName}&itemRarity={itemRarity}&itemTypeId={itemTypeId}&itemMinLevel={itemMinLevel}&itemMaxLevel={itemMaxLevel}&itemGradeName={itemGradeName}&reinforce={reinforce}&minReinforce={minReinforce}&maxReinforce={maxReinforce}&amplificationName={amplificationName}&minAmplification={minAmplification}&maxAmplification={maxAmplification}&minRefine={minRefine}&maxRefine={maxRefine}&minPrice={minPrice}&maxPrice={maxPrice}&sort={sort}&limit={limit}&next={next}
 */
export interface AuctionSearchParams extends PaginationParams {
  /** 아이템 ID */
  itemId?: string;
  /** 아이템 이름 */
  itemName?: string;
  /** 아이템 희귀도 */
  itemRarity?: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId?: string;
  /** 최소 레벨 */
  itemMinLevel?: number;
  /** 최대 레벨 */
  itemMaxLevel?: number;
  /** 아이템 등급 */
  itemGradeName?: string;
  /** 강화 수치 */
  reinforce?: number;
  /** 최소 강화 수치 */
  minReinforce?: number;
  /** 최대 강화 수치 */
  maxReinforce?: number;
  /** 증폭 이름 */
  amplificationName?: string;
  /** 최소 증폭 수치 */
  minAmplification?: number;
  /** 최대 증폭 수치 */
  maxAmplification?: number;
  /** 최소 제련 수치 */
  minRefine?: number;
  /** 최대 제련 수치 */
  maxRefine?: number;
  /** 최소 가격 */
  minPrice?: number;
  /** 최대 가격 */
  maxPrice?: number;
  /** 정렬 방식 */
  sort?: 'unitPrice' | 'reinforce' | 'amplificationName' | 'refine';
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 경매장 판매 내역 조회 파라미터
 * @endpoint GET /df/auction-sold?itemId={itemId}&itemName={itemName}&itemRarity={itemRarity}&itemTypeId={itemTypeId}&itemMinLevel={itemMinLevel}&itemMaxLevel={itemMaxLevel}&itemGradeName={itemGradeName}&reinforce={reinforce}&minReinforce={minReinforce}&maxReinforce={maxReinforce}&amplificationName={amplificationName}&minAmplification={minAmplification}&maxAmplification={maxAmplification}&minRefine={minRefine}&maxRefine={maxRefine}&limit={limit}&next={next}
 */
export interface AuctionSoldParams extends PaginationParams {
  /** 아이템 ID */
  itemId?: string;
  /** 아이템 이름 */
  itemName?: string;
  /** 아이템 희귀도 */
  itemRarity?: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId?: string;
  /** 최소 레벨 */
  itemMinLevel?: number;
  /** 최대 레벨 */
  itemMaxLevel?: number;
  /** 아이템 등급 */
  itemGradeName?: string;
  /** 강화 수치 */
  reinforce?: number;
  /** 최소 강화 수치 */
  minReinforce?: number;
  /** 최대 강화 수치 */
  maxReinforce?: number;
  /** 증폭 이름 */
  amplificationName?: string;
  /** 최소 증폭 수치 */
  minAmplification?: number;
  /** 최대 증폭 수치 */
  maxAmplification?: number;
  /** 최소 제련 수치 */
  minRefine?: number;
  /** 최대 제련 수치 */
  maxRefine?: number;
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 캐릭터 타임라인 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/timeline?startDate={startDate}&endDate={endDate}&code={code}&limit={limit}&next={next}
 */
export interface CharacterTimelineParams extends PaginationParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
  /** 조회 시작 날짜 (YYYY-MM-DD) */
  startDate?: string;
  /** 조회 종료 날짜 (YYYY-MM-DD) */
  endDate?: string;
  /** 타임라인 코드 */
  code?: string;
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}