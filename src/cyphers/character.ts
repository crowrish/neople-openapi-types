import { CyphersGameType } from '../common';
import { CyphersTier } from './enums';

/** 플레이어 기본 정보 */
export interface PlayerInfo {
  /** 플레이어 ID */
  playerId: string;
  /** 닉네임 */
  nickname: string;
  /** 등급 */
  grade: number;
  /** 클란명 */
  clanName?: string;
}

/** 플레이어 랭킹 정보 */
export interface PlayerRanking {
  /** 플레이어 ID */
  playerId: string;
  /** 닉네임 */
  nickname: string;
  /** 등급 */
  grade: number;
  /** RP 점수 */
  rp: number;
  /** 랭킹 점수 */
  rankingPoint: number;
  /** 티어명 */
  tierName: CyphersTier;
  /** 승리 수 */
  win: number;
  /** 패배 수 */
  lose: number;
  /** 정지 수 */
  stop: number;
}

/** 전체 랭킹 조회 결과 */
export interface RankingInfo {
  /** 조회 날짜 */
  date: string;
  /** 랭킹 타입 */
  rankingType: CyphersGameType;
  /** 랭킹 목록 */
  rows: PlayerRanking[];
  /** 다음 페이지 토큰 */
  next?: string;
}

/** 플레이어 매치 기록 조회 */
export interface PlayerMatches {
  /** 조회 날짜 */
  date: string;
  /** 게임 타입 ID */
  gameTypeId: CyphersGameType;
  /** 다음 페이지 토큰 */
  next?: string;
  /** 매치 기록 목록 */
  matches: MatchRecord[];
}

/** 매치 기록 상세 */
export interface MatchRecord {
  /** 매치 ID */
  matchId: string;
  /** 플레이 시간 */
  playTime: number;
  /** 경기 결과 */
  result: 'win' | 'lose';
  /** 플레이 타입명 */
  playTypeName: string;
  /** 캐릭터 ID */
  characterId: string;
  /** 캐릭터명 */
  characterName: string;
  /** 레벨 */
  level: number;
  /** 킬 수 */
  killCount: number;
  /** 데스 수 */
  deathCount: number;
  /** 어시스트 수 */
  assistCount: number;
  /** 공격 점수 */
  attackPoint: number;
  /** 피해 점수 */
  damagePoint: number;
  /** 전투 점수 */
  battlePoint: number;
  /** 시야 점수 */
  sightPoint: number;
  /** 타워 공격 점수 */
  towerAttackPoint: number;
  /** 백어택 횟수 */
  backAttackCount: number;
  /** 콤보 횟수 */
  comboCount: number;
  /** 스펠 사용 횟수 */
  spellCount: number;
  /** 힐량 */
  healAmount: number;
  /** 센티넬 킬 수 */
  sentinelKillCount: number;
  /** 철거자 킬 수 */
  demolisherKillCount: number;
}
