import { CyphersItemRarity } from '../common';

/** 아이템 기본 정보 */
export interface ItemInfo {
  itemId: string;
  itemName: string;
  slotCode: string;
  rarityCode: CyphersItemRarity;
  equipSlotCode: string;
  itemTypeCode: string;
}

/** 아이템 상세 정보 */
export interface ItemDetail extends ItemInfo {
  itemHash?: string;
  obtainInfo?: string;
  tuning?: ItemTuning;
}

/** 아이템 튜닝 정보 */
export interface ItemTuning {
  explain: string;
  slotId: number;
  explain2: string;
}

/** 아이템 검색 결과 */
export interface ItemSearch {
  itemId: string;
  itemName: string;
  slotCode: string;
  rarityCode: CyphersItemRarity;
  equipSlotCode: string;
  itemTypeCode: string;
  seasonCode: string;
}

/** 플레이어 장비 정보 */
export interface PlayerEquipment {
  playerId: string;
  nickname: string;
  grade: number;
  clanName?: string;
  equipment: EquipmentSlot[];
}

/** 장비 슬롯 정보 */
export interface EquipmentSlot {
  slotCode: string;
  slotName: string;
  item?: ItemInfo;
  tuning?: ItemTuning;
}