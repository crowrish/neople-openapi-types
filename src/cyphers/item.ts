import { CyphersItemRarity } from './enums';

/** 아이템 기본 정보 */
export interface ItemInfo {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 슬롯 코드 */
  slotCode: string;
  /** 희귀도 코드 */
  rarityCode: CyphersItemRarity;
  /** 장비 슬롯 코드 */
  equipSlotCode: string;
  /** 아이템 타입 코드 */
  itemTypeCode: string;
}

/** 아이템 상세 정보 */
export interface ItemDetail extends ItemInfo {
  /** 아이템 해시 */
  itemHash?: string;
  /** 획득 정보 */
  obtainInfo?: string;
  /** 튜닝 정보 */
  tuning?: ItemTuning;
}

/** 아이템 튜닝 정보 */
export interface ItemTuning {
  /** 튜닝 설명 */
  explain: string;
  /** 슬롯 ID */
  slotId: number;
  /** 튜닝 상세 설명 */
  explain2: string;
}

/** 아이템 검색 결과 */
export interface ItemSearch {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 슬롯 코드 */
  slotCode: string;
  /** 희귀도 코드 */
  rarityCode: CyphersItemRarity;
  /** 장비 슬롯 코드 */
  equipSlotCode: string;
  /** 아이템 타입 코드 */
  itemTypeCode: string;
  /** 시즌 코드 */
  seasonCode: string;
}

/** 플레이어 장비 정보 */
export interface PlayerEquipment {
  /** 플레이어 ID */
  playerId: string;
  /** 닉네임 */
  nickname: string;
  /** 등급 */
  grade: number;
  /** 클란명 */
  clanName?: string;
  /** 장비 목록 */
  equipment: EquipmentSlot[];
}

/** 장비 슬롯 정보 */
export interface EquipmentSlot {
  /** 슬롯 코드 */
  slotCode: string;
  /** 슬롯명 */
  slotName: string;
  /** 장비된 아이템 */
  item?: ItemInfo;
  /** 튜닝 정보 */
  tuning?: ItemTuning;
}
