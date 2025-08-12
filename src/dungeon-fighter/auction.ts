import { DFServer } from '../common';
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