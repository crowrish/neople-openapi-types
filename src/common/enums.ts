export type DFItemRarity = 
  | 'common'
  | 'uncommon' 
  | 'rare'
  | 'unique'
  | 'epic'
  | 'chronicle'
  | 'legendary'
  | 'myth';

export const DF_ITEM_RARITIES: Record<DFItemRarity, string> = {
  common: '커먼',
  uncommon: '언커먼',
  rare: '레어',
  unique: '유니크',
  epic: '에픽',
  chronicle: '크로니클',
  legendary: '레전더리',
  myth: '신화'
};

export type CyphersItemRarity = '101' | '102' | '103' | '104';

export const CYPHERS_ITEM_RARITIES: Record<CyphersItemRarity, string> = {
  '101': '일반',
  '102': '고급',
  '103': '희귀',
  '104': '유니크'
};

export type CyphersTier = 
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'JOKER'
  | 'ACE';

export const CYPHERS_TIERS: Record<CyphersTier, string> = {
  BRONZE: '브론즈',
  SILVER: '실버', 
  GOLD: '골드',
  PLATINUM: '플래티넘',
  DIAMOND: '다이아몬드',
  JOKER: '조커',
  ACE: '에이스'
};