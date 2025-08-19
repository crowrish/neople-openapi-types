import { DFItemRarity } from './enums';

/** 아이템 검색 결과 */
export interface ItemSearch {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 획득 정보 */
  itemObtainInfo: string;
  /** 아이템 기본 설명 */
  itemExplain: string;
  /** 아이템 상세 설명 */
  itemExplainDetail: string;
  /** 아이템 플레이버 텍스트 */
  itemFlavorText: string;
  /** 세트 아이템 ID */
  setItemId?: string;
  /** 세트 아이템명 */
  setItemName?: string;
}

/** 아이템 상세 정보 */
export interface ItemDetail {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 획득 정보 */
  itemObtainInfo: string;
  /** 아이템 기본 설명 */
  itemExplain: string;
  /** 아이템 상세 설명 */
  itemExplainDetail: string;
  /** 아이템 플레이버 텍스트 */
  itemFlavorText: string;
  /** 세트 아이템 ID */
  setItemId?: string;
  /** 세트 아이템명 */
  setItemName?: string;
  /** 아이템 능력치 */
  itemStatus?: ItemStatus[];
}

/** 아이템 능력치 */
export interface ItemStatus {
  /** 능력치명 */
  name: string;
  /** 능력치 값 */
  value: string;
}

/** 세트 아이템 정보 */
export interface SetItemInfo {
  /** 세트 아이템 ID */
  setItemId: string;
  /** 세트 아이템명 */
  setItemName: string;
  /** 세트 구성 아이템 */
  setItems: SetItem[];
  /** 세트 옵션 */
  setItemOption: SetItemOption[];
}

/** 세트 구성 아이템 */
export interface SetItem {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 획득 정보 */
  itemObtainInfo: string;
  /** 아이템 기본 설명 */
  itemExplain: string;
  /** 아이템 상세 설명 */
  itemExplainDetail: string;
  /** 아이템 플레이버 텍스트 */
  itemFlavorText: string;
}

/** 세트 아이템 옵션 (구버전) */
export interface SetItemOption {
  /** 세트 개수 */
  setCount: number;
  /** 세트 옵션 (간략) */
  setOption: string;
  /** 세트 옵션 (상세) */
  setOptionFull: string;
}

/** 다중 아이템 정보 */
export interface MultiItemInfo {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 획득 정보 */
  itemObtainInfo: string;
  /** 아이템 기본 설명 */
  itemExplain: string;
  /** 아이템 상세 설명 */
  itemExplainDetail: string;
  /** 아이템 플레이버 텍스트 */
  itemFlavorText: string;
  /** 다중 아이템 목록 */
  multiItems?: MultiItem[];
}

/** 다중 아이템 */
export interface MultiItem {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 기본 설명 */
  itemExplain: string;
  /** 아이템 플레이버 텍스트 */
  itemFlavorText: string;
}

/** 아이템 상점 정보 */
export interface ItemShop {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 희귀도 */
  itemRarity: DFItemRarity;
  /** 아이템 타입 ID */
  itemTypeId: string;
  /** 아이템 타입명 */
  itemType: string;
  /** 아이템 착용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 획득 정보 */
  itemObtainInfo: string;
  /** 아이템 기본 설명 */
  itemExplain: string;
  /** 아이템 상세 설명 */
  itemExplainDetail: string;
  /** 아이템 플레이버 텍스트 */
  itemFlavorText: string;
  /** 캐시 상점 정보 */
  cash?: {
    /** 패키지 목록 */
    packages?: PackageInfo[];
  };
}

/** 패키지 정보 */
export interface PackageInfo {
  /** 패키지 ID */
  packageId: string;
  /** 패키지명 */
  packageName: string;
  /** 패키지 구성 아이템 */
  packageItems?: PackageItem[];
}

/** 패키지 구성 아이템 */
export interface PackageItem {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 개수 */
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
