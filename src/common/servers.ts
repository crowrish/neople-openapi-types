/** 던전앤파이터 서버 식별자 */
export type DFServer =
  | 'anton'
  | 'bakal'
  | 'cain'
  | 'casillas'
  | 'diregie'
  | 'hilder'
  | 'prey'
  | 'siroco';

/** 던전앤파이터 서버 이름 매핑 */
export const DF_SERVERS: Record<DFServer, string> = {
  anton: '안톤',
  bakal: '바칼',
  cain: '카인',
  casillas: '카시야스',
  diregie: '디레지에',
  hilder: '힐더',
  prey: '프레이',
  siroco: '시로코',
};

/** 사이퍼즈 게임 타입 식별자 */
export type CyphersGameType = 'rating' | 'normal';

/** 사이퍼즈 게임 타입 이름 매핑 */
export const CYPHERS_GAME_TYPES: Record<CyphersGameType, string> = {
  rating: '랭킹',
  normal: '일반',
};
