import { DFItemRarity } from './enums';

export interface ItemSearch {
  itemId: string;
  itemName: string;
  itemRarity: DFItemRarity;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemObtainInfo: string;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
  setItemId?: string;
  setItemName?: string;
}

export interface ItemDetail {
  itemId: string;
  itemName: string;
  itemRarity: DFItemRarity;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemObtainInfo: string;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
  setItemId?: string;
  setItemName?: string;
  itemStatus?: ItemStatus[];
}

export interface ItemStatus {
  name: string;
  value: string;
}

export interface SetItemInfo {
  setItemId: string;
  setItemName: string;
  setItems: SetItem[];
  setItemOption: SetItemOption[];
}

export interface SetItem {
  itemId: string;
  itemName: string;
  itemRarity: DFItemRarity;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemObtainInfo: string;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
}

export interface SetItemOption {
  setCount: number;
  setOption: string;
  setOptionFull: string;
}

export interface MultiItemInfo {
  itemId: string;
  itemName: string;
  itemRarity: DFItemRarity;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemObtainInfo: string;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
  multiItems?: MultiItem[];
}

export interface MultiItem {
  itemId: string;
  itemName: string;
  itemRarity: DFItemRarity;
  itemAvailableLevel: number;
  itemExplain: string;
  itemFlavorText: string;
}

export interface ItemShop {
  itemId: string;
  itemName: string;
  itemRarity: DFItemRarity;
  itemTypeId: string;
  itemType: string;
  itemAvailableLevel: number;
  itemObtainInfo: string;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
  cash?: {
    packages?: PackageInfo[];
  };
}

export interface PackageInfo {
  packageId: string;
  packageName: string;
  packageItems?: PackageItem[];
}

export interface PackageItem {
  itemId: string;
  itemName: string;
  itemCount: number;
}

/** 아이템 해시태그 응답 */
export interface ItemHashtagResponse {
  /** 해시태그 목록 */
  rows: string[];
}

/** 세트 아이템 검색 응답 */
export interface SetItemSearchResponse {
  /** 세트 아이템 목록 */
  rows: SetItemSearchResult[];
}

/** 세트 아이템 검색 결과 */
export interface SetItemSearchResult {
  /** 세트 아이템 ID */
  setItemId: string;
  /** 세트 아이템명 */
  setItemName: string;
}

/** 다중 세트 아이템 응답 */
export interface MultiSetItemResponse {
  /** 세트 아이템 목록 */
  rows: SetItemDetailInfo[];
}

/** 세트 아이템 상세 정보 */
export interface SetItemDetailInfo {
  /** 세트 아이템 ID */
  setItemId: string;
  /** 세트 아이템명 */
  setItemName: string;
  /** 세트 구성 아이템 */
  setItems: SetItemPiece[];
  /** 세트 옵션 */
  setItemOption: SetItemOption[];
}

/** 세트 구성 아이템 */
export interface SetItemPiece {
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
}

/** 세트 아이템 옵션 */
export interface SetItemOption {
  /** 옵션 설명 */
  explain: string;
  /** 상세 설명 */
  detailExplain?: string;
  /** 버프 설명 */
  buffExplain?: string;
  /** 버프 상세 설명 */
  buffExplainDetail?: string;
  /** 능력치 */
  status: ItemStatus[];
}
