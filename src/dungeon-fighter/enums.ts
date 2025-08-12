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