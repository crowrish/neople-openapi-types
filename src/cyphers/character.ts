import { CyphersGameType, CyphersTier } from '../common';

/** 플레이어 기본 정보 */
export interface PlayerInfo {
  playerId: string;
  nickname: string;
  grade: number;
  clanName?: string;
}

/** 플레이어 랭킹 정보 */
export interface PlayerRanking {
  playerId: string;
  nickname: string;
  grade: number;
  rp: number;
  rankingPoint: number;
  tierName: CyphersTier;
  win: number;
  lose: number;
  stop: number;
}

/** 전체 랭킹 조회 결과 */
export interface RankingInfo {
  date: string;
  rankingType: CyphersGameType;
  rows: PlayerRanking[];
  next?: string;
}

/** 플레이어 매치 기록 조회 */
export interface PlayerMatches {
  date: string;
  gameTypeId: CyphersGameType;
  next?: string;
  matches: MatchRecord[];
}

/** 매치 기록 상세 */
export interface MatchRecord {
  matchId: string;
  playTime: number;
  result: 'win' | 'lose';
  playTypeName: string;
  characterId: string;
  characterName: string;
  level: number;
  killCount: number;
  deathCount: number;
  assistCount: number;
  attackPoint: number;
  damagePoint: number;
  battlePoint: number;
  sightPoint: number;
  towerAttackPoint: number;
  backAttackCount: number;
  comboCount: number;
  spellCount: number;
  healAmount: number;
  sentinelKillCount: number;
  demolisherKillCount: number;
}