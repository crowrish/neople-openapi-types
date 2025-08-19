import { CyphersGameType } from '../common';

/** 매치 상세 정보 */
export interface MatchDetail {
  /** 경기 날짜 */
  date: string;
  /** 매치 ID */
  matchId: string;
  /** 게임 타입 ID */
  gameTypeId: CyphersGameType;
  /** 플레이 정보 */
  playInfo: {
    /** 플레이 ID */
    playId: string;
    /** 플레이 타입명 */
    playTypeName: string;
    /** 경기 결과 */
    result: 'win' | 'lose';
    /** 랜덤 여부 */
    random: boolean;
  };
  /** 팀 정보 */
  teams: MatchTeam[];
  /** 포지션 정보 */
  position: Position[];
}

/** 매치 팀 정보 */
export interface MatchTeam {
  /** 팀 ID */
  teamId: string;
  /** 팀 결과 */
  result: 'win' | 'lose';
  /** 플레이어 목록 */
  players: MatchPlayer[];
}

/** 매치 플레이어 정보 */
export interface MatchPlayer {
  /** 플레이어 ID */
  playerId: string;
  /** 닉네임 */
  nickname: string;
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
  /** 스펄 사용 횟수 */
  spellCount: number;
  /** 힐량 */
  healAmount: number;
  /** 센티널 킬 수 */
  sentinelKillCount: number;
  /** 철거자 킬 수 */
  demolisherKillCount: number;
  /** 아이템 목록 */
  items: MatchPlayerItem[];
}

/** 매치 플레이어 아이템 */
export interface MatchPlayerItem {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 슬롯 코드 */
  slotCode: string;
  /** 희귀도 코드 */
  rarityCode: string;
  /** 장비 슬롯 코드 */
  equipSlotCode: string;
  /** 아이템 타입 코드 */
  itemTypeCode: string;
}

/** 포지션 정보 */
export interface Position {
  /** 플레이어 ID */
  playerId: string;
  /** 닉네임 */
  nickname: string;
  /** 속성 ID */
  attributeId: string;
  /** 포지션명 */
  positionName: string;
  /** 맵 위치 정보 */
  map: PositionMap[];
}

/** 포지션 맵 정보 */
export interface PositionMap {
  /** X 좌표 */
  x: number;
  /** Y 좌표 */
  y: number;
  /** 시간 */
  time: number;
}
