import { PaginationParams, DFServer } from '../common';
import { DFItemRarity } from './enums';

/** 서버 목록 응답 */
export interface ServerListResponse {
  /** 서버 목록 */
  rows: ServerInfo[];
}

/** 서버 정보 */
export interface ServerInfo {
  /** 서버 ID */
  serverId: string;
  /** 서버명 */
  serverName: string;
}

/** 직업 목록 응답 */
export interface JobListResponse {
  /** 직업 목록 */
  rows: JobInfo[];
}

/** 직업 정보 */
export interface JobInfo {
  /** 직업 ID */
  jobId: string;
  /** 직업명 */
  jobName: string;
  /** 전직 정보 */
  rows: JobGrowInfo[];
}

/** 전직 정보 */
export interface JobGrowInfo {
  /** 전직 ID */
  jobGrowId: string;
  /** 전직명 */
  jobGrowName: string;
  /** 다음 전직 */
  next?: JobGrowInfo;
}

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

/** 캐릭터 휘장 정보 조회 파라미터
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

/** 캐릭터 스킬 스타일 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/skill/style
 */
export interface CharacterSkillStyleParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 버프 스킬 강화 장착 장비 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/skill/buff/equip/equipment
 */
export interface CharacterBuffEquipmentParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 버프 스킬 강화 장착 아바타 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/skill/buff/equip/avatar
 */
export interface CharacterBuffAvatarParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 버프 스킬 강화 장착 크리처 조회 파라미터
 * @endpoint GET /df/servers/{serverId}/characters/{characterId}/skill/buff/equip/creature
 */
export interface CharacterBuffCreatureParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터 ID */
  characterId: string;
}

/** 캐릭터 명성 검색 파라미터
 * @endpoint GET /df/servers/{serverId}/characters-fame
 */
export interface CharacterFameSearchParams {
  /** 서버 ID */
  serverId: DFServer;
  /** 캐릭터명 */
  characterName?: string;
  /** 직업 ID */
  jobId?: string;
  /** 전직 ID */
  jobGrowId?: string;
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 경매장 아이템 상세 조회 파라미터
 * @endpoint GET /df/auction/{auctionNo}
 */
export interface AuctionDetailParams {
  /** 경매 번호 */
  auctionNo: number;
}

/** 아바타 마켓 판매 상품 조회 파라미터
 * @endpoint GET /df/avatar-market/sale
 */
export interface AvatarMarketSaleParams {
  /** 결과 개수 제한 */
  limit?: number;
  /** 다음 페이지 토큰 */
  next?: string;
}

/** 아바타 마켓 상품 상세 조회 파라미터
 * @endpoint GET /df/avatar-market/sale/{goodsNo}
 */
export interface AvatarMarketSaleDetailParams {
  /** 상품 번호 */
  goodsNo: number;
}

/** 아바타 마켓 판매 내역 조회 파라미터
 * @endpoint GET /df/avatar-market/sold
 */
export interface AvatarMarketSoldParams {
  /** 결과 개수 제한 */
  limit?: number;
  /** 다음 페이지 토큰 */
  next?: string;
}

/** 아이템 상점 정보 조회 파라미터
 * @endpoint GET /df/items/{itemId}/shop
 */
export interface ItemShopParams {
  /** 아이템 ID */
  itemId: string;
}

/** 다중 아이템 조회 파라미터
 * @endpoint GET /df/multi/items
 */
export interface MultiItemParams {
  /** 쉼표로 구분된 아이템 ID 목록 */
  itemIds: string;
}

/** 세트 아이템 정보 조회 파라미터
 * @endpoint GET /df/setitems/{setItemId}
 */
export interface SetItemParams {
  /** 세트 아이템 ID */
  setItemId: string;
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

/** 아바타 마켓 해시태그 조회 파라미터
 * @endpoint GET /df/avatar-market/hashtag
 */
export interface AvatarMarketHashtagParams {
  // 파라미터 없음 - 모든 해시태그 반환
}

/** 특정 아바타 마켓 판매 완료 상품 조회 파라미터
 * @endpoint GET /df/avatar-market/sold/{goodsNo}
 */
export interface AvatarMarketSoldDetailParams {
  /** 상품 번호 */
  goodsNo: number;
}

/** 아이템 해시태그 조회 파라미터
 * @endpoint GET /df/item-hashtag
 */
export interface ItemHashtagParams {
  // 파라미터 없음 - 모든 아이템 해시태그 반환
}

/** 세트 아이템 검색 파라미터
 * @endpoint GET /df/setitems?setItemName={setItemName}&wordType={wordType}&limit={limit}
 */
export interface SetItemSearchParams {
  /** 세트 아이템 이름 */
  setItemName: string;
  /** 검색 방식 - match: 부분일치, front: 앞글자일치, full: 완전일치 */
  wordType?: 'match' | 'front' | 'full';
  /** 결과 개수 제한 (최대 100, 기본 10) */
  limit?: number;
}

/** 다중 세트 아이템 조회 파라미터
 * @endpoint GET /df/multi/setitems?setItemIds={setItemIds}
 */
export interface MultiSetItemParams {
  /** 쉼표로 구분된 세트 아이템 ID 목록 */
  setItemIds: string;
}

/** 직업별 스킬 목록 조회 파라미터
 * @endpoint GET /df/skills/{jobId}?jobGrowId={jobGrowId}
 */
export interface JobSkillListParams {
  /** 직업 ID */
  jobId: string;
  /** 전직 ID (필수) */
  jobGrowId: string;
}

/** 특정 스킬 상세 정보 조회 파라미터
 * @endpoint GET /df/skills/{jobId}/{skillId}
 */
export interface SkillDetailParams {
  /** 직업 ID */
  jobId: string;
  /** 스킬 ID */
  skillId: string;
}

/** 다중 스킬 조회 파라미터
 * @endpoint GET /df/multi/skills/{jobId}?skillIds={skillIds}
 */
export interface MultiSkillParams {
  /** 직업 ID */
  jobId: string;
  /** 쉼표로 구분된 스킬 ID 목록 */
  skillIds: string;
}

/** 아이템 검색 응답 */
export interface ItemSearchResponse {
  /** 아이템 목록 */
  rows: any[];
}

/** 아이템 상세 응답 */
export interface ItemDetailResponse {
  /** 아이템 상세 정보 */
  itemId: string;
  itemName: string;
  itemRarity: string;
  [key: string]: any;
}

/** 아이템 상점 정보 응답 */
export interface ItemShopResponse {
  /** 아이템 상점 정보 */
  itemId: string;
  itemName: string;
  [key: string]: any;
}

/** 세트 아이템 상세 응답 */
export interface SetItemInfoResponse {
  /** 세트 아이템 정보 */
  setItemId: string;
  setItemName: string;
  [key: string]: any;
}

/** 다중 아이템 응답 */
export interface MultiItemInfoResponse {
  /** 아이템 목록 */
  rows: any[];
}

/** 경매장 검색 응답 */
export interface AuctionSearchResponse {
  /** 경매 아이템 목록 */
  rows: any[];
}

/** 경매장 상세 응답 */
export interface AuctionDetailResponse {
  /** 경매 아이템 정보 */
  auctionNo: number;
  itemId: string;
  itemName: string;
  [key: string]: any;
}

/** 경매장 판매 완료 내역 응답 */
export interface AuctionSoldResponse {
  /** 판매 완료 아이템 목록 */
  rows: any[];
}

/** 아바타 마켓 판매 상품 응답 */
export interface AvatarMarketSaleResponse {
  /** 판매 상품 목록 */
  rows: any[];
}

/** 아바타 마켓 상품 상세 응답 */
export interface AvatarMarketSaleDetailResponse {
  /** 상품 상세 정보 */
  goodsNo: number;
  title: string;
  [key: string]: any;
}

/** 아바타 마켓 판매 내역 응답 */
export interface AvatarMarketSoldResponse {
  /** 판매 내역 목록 */
  rows: any[];
}

/** 캐릭터 명성 검색 응답 */
export interface CharacterFameSearchResponse {
  /** 캐릭터 목록 */
  rows: any[];
}

/** 캐릭터 검색 응답 */
export interface CharacterSearchResponse {
  /** 캐릭터 목록 */
  rows: any[];
}

/** 캐릭터 기본 정보 응답 */
export interface CharacterBasicResponse {
  /** 캐릭터 기본 정보 */
  characterId: string;
  characterName: string;
  [key: string]: any;
}

/** 캐릭터 타임라인 응답 */
export interface CharacterTimelineResponse {
  /** 타임라인 목록 */
  timeline: any[];
}

/** 캐릭터 능력치 응답 */
export interface CharacterStatusResponse {
  /** 능력치 정보 */
  characterId: string;
  characterName: string;
  stat: any[];
}

/** 캐릭터 장비 응답 */
export interface CharacterEquipmentResponse {
  /** 장비 정보 */
  characterId: string;
  characterName: string;
  equipment: any[];
}

/** 캐릭터 아바타 응답 */
export interface CharacterAvatarResponse {
  /** 아바타 정보 */
  characterId: string;
  characterName: string;
  avatar: any[];
}

/** 캐맭터 크리처 응답 */
export interface CharacterCreatureResponse {
  /** 크리처 정보 */
  characterId: string;
  characterName: string;
  creature?: any;
}

/** 캐릭터 휘장 응답 */
export interface CharacterFlagResponse {
  /** 휘장 정보 */
  characterId: string;
  characterName: string;
  flag?: any;
}

/** 캐릭터 스킬 스타일 응답 */
export interface CharacterSkillStyleResponse {
  /** 스킬 스타일 정보 */
  characterId: string;
  characterName: string;
  skill?: any;
}

/** 캐릭터 버프 장비 응답 */
export interface CharacterBuffEquipmentResponse {
  /** 버프 장비 정보 */
  characterId: string;
  characterName: string;
  skill?: any;
}

/** 캐릭터 버프 아바타 응답 */
export interface CharacterBuffAvatarResponse {
  /** 버프 아바타 정보 */
  characterId: string;
  characterName: string;
  skill?: any;
}

/** 캐릭터 버프 크리처 응답 */
export interface CharacterBuffCreatureResponse {
  /** 버프 크리처 정보 */
  characterId: string;
  characterName: string;
  skill?: any;
}
