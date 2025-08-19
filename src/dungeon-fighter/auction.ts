// import { DFServer } from '../common';
import { DFItemRarity } from './enums';

/** 경매장 검색 조건 */
export interface AuctionSearch {
  /** 아이템 ID */
  itemId?: string;
  /** 아이템명 */
  itemName?: string;
  /** 아이템 희귀도 */
  itemRarity?: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId?: string;
  /** 최소 아이템 레벨 */
  itemMinLevel?: number;
  /** 최대 아이템 레벨 */
  itemMaxLevel?: number;
  /** 아이템 등급명 */
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
  /** 결과 개수 제한 */
  limit?: number;
  /** 다음 페이지 토큰 */
  next?: string;
}

/** 경매장 아이템 정보 */
export interface AuctionItem {
  /** 경매 번호 */
  auctionNo: number;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 개수 */
  count: number;
  /** 개당 가격 */
  unitPrice: number;
  /** 강화 수치 */
  reinforce?: number;
  /** 증폭 이름 */
  amplificationName?: string;
  /** 제련 수치 */
  refine?: number;
  /** 아이템 등급명 */
  itemGradeName?: string;
  /** 경매 등록 일시 */
  auctionRegistDate: string;
  /** 경매 만료 일시 */
  auctionExpireDate: string;
  /** 판매자 */
  seller: string;
}

/** 경매장 판매 완료 아이템 정보 */
export interface AuctionSold {
  /** 경매 번호 */
  auctionNo: number;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 개수 */
  count: number;
  /** 개당 가격 */
  unitPrice: number;
  /** 강화 수치 */
  reinforce?: number;
  /** 증폭 이름 */
  amplificationName?: string;
  /** 제련 수치 */
  refine?: number;
  /** 아이템 등급명 */
  itemGradeName?: string;
  /** 판매 완료 일시 */
  soldDate: string;
  /** 판매자 */
  seller: string;
  /** 구매자 */
  buyer: string;
}

/** 아바타 마켓 해시태그 응답 */
export interface AvatarMarketHashtagResponse {
  /** 해시태그 목록 */
  rows: string[];
}

/** 특정 아바타 마켓 판매 완료 상품 응답 */
export interface AvatarMarketSoldDetailResponse {
  /** 상품 번호 */
  goodsNo: number;
  /** 상품 제목 */
  title: string;
  /** 가격 */
  price: number;
  /** 착용 가능 직업 */
  jobs: AvatarJob[];
  /** 판매 일자 */
  soldDate: string;
  /** 해시태그 */
  hashtag: string[];
  /** 엠블렘 */
  emblem: EmblemInfo;
  /** 아바타 세트 여부 */
  avatarSet: boolean;
  /** 아바타 등급 */
  avatarRarity: string;
  /** 아바타 개수 */
  avatarCount: number;
  /** 아바타 목록 */
  avatar: AvatarMarketItem[];
}

/** 아바타 착용 가능 직업 */
export interface AvatarJob {
  /** 직업 ID */
  jobId: string;
  /** 직업명 */
  jobName: string;
}

/** 엠블렘 정보 */
export interface EmblemInfo {
  /** 엠블렘 코드 */
  code: number;
  /** 엠블렘명 */
  name: string;
}

/** 아바타 마켓 아이템 */
export interface AvatarMarketItem {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
  /** 옵션 능력 */
  optionAbility: string;
  /** 엠블렘 목록 */
  emblems: AvatarEmblem[];
}

/** 아바타 엠블렘 */
export interface AvatarEmblem {
  /** 슬롯 번호 */
  slotNo: number;
  /** 슬롯 색상 */
  slotColor: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
}
