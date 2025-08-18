export type CyphersItemRarity = '101' | '102' | '103' | '104';

export const CYPHERS_ITEM_RARITIES: Record<CyphersItemRarity, string> = {
  '101': '일반',
  '102': '언커먼',
  '103': '레어',
  '104': '유니크',
};

export type CyphersTier =
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'DIAMOND'
  | 'JOKER'
  | 'ACE';

export const CYPHERS_TIERS: Record<CyphersTier, string> = {
  BRONZE: '브론즈',
  SILVER: '실버',
  GOLD: '골드',
  DIAMOND: '다이아몬드',
  JOKER: '조커',
  ACE: '에이스',
};
