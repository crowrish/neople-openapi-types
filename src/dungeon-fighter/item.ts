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