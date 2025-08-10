import { CyphersGameType } from '../common';

/** 매치 상세 정보 */
export interface MatchDetail {
  date: string;
  matchId: string;
  gameTypeId: CyphersGameType;
  playInfo: {
    playId: string;
    playTypeName: string;
    result: 'win' | 'lose';
    random: boolean;
  };
  teams: MatchTeam[];
  position: Position[];
}

/** 매치 팀 정보 */
export interface MatchTeam {
  teamId: string;
  result: 'win' | 'lose';
  players: MatchPlayer[];
}

/** 매치 플레이어 정보 */
export interface MatchPlayer {
  playerId: string;
  nickname: string;
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
  items: MatchPlayerItem[];
}

/** 매치 플레이어 아이템 */
export interface MatchPlayerItem {
  itemId: string;
  itemName: string;
  slotCode: string;
  rarityCode: string;
  equipSlotCode: string;
  itemTypeCode: string;
}

/** 포지션 정보 */
export interface Position {
  playerId: string;
  nickname: string;
  attributeId: string;
  positionName: string;
  map: PositionMap[];
}

/** 포지션 맵 정보 */
export interface PositionMap {
  x: number;
  y: number;
  time: number;
}