// import { DFServer } from '../common';
import { DFItemRarity } from './enums';

export interface AuctionSearch {
  itemId?: string;
  itemName?: string;
  itemRarity?: DFItemRarity;
  itemTypeId?: string;
  itemMinLevel?: number;
  itemMaxLevel?: number;
  itemGradeName?: string;
  reinforce?: number;
  minReinforce?: number;
  maxReinforce?: number;
  amplificationName?: string;
  minAmplification?: number;
  maxAmplification?: number;
  minRefine?: number;
  maxRefine?: number;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'unitPrice' | 'reinforce' | 'amplificationName' | 'refine';
  limit?: number;
  next?: string;
}

export interface AuctionItem {
  auctionNo: number;
  itemId: string;
  itemName: string;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemRarity: DFItemRarity;
  count: number;
  unitPrice: number;
  reinforce?: number;
  amplificationName?: string;
  refine?: number;
  itemGradeName?: string;
  auctionRegistDate: string;
  auctionExpireDate: string;
  seller: string;
}

export interface AuctionSold {
  auctionNo: number;
  itemId: string;
  itemName: string;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemRarity: DFItemRarity;
  count: number;
  unitPrice: number;
  reinforce?: number;
  amplificationName?: string;
  refine?: number;
  itemGradeName?: string;
  soldDate: string;
  seller: string;
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
