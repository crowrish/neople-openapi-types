/** 캐릭터 타임라인 정보 */
export interface Timeline {
  /** 캐릭터 고유 ID */
  characterId: string;
  /** 캐릭터명 */
  characterName: string;
  /** 캐릭터 레벨 */
  level: number;
  /** 직업 ID */
  jobId: string;
  /** 전직 ID */
  jobGrowId: string;
  /** 직업명 */
  jobName: string;
  /** 전직명 */
  jobGrowName: string;
  /** 모험가명 */
  adventureName: string;
  /** 길드 ID */
  guildId?: string;
  /** 길드명 */
  guildName?: string;
  /** 타임라인 항목 목록 */
  timeline: TimelineItem[];
}

/** 타임라인 항목 */
export interface TimelineItem {
  /** 발생 날짜 */
  date: string;
  /** 타임라인 코드 */
  code: string;
  /** 타임라인 이름 */
  name: string;
  /** 타임라인 데이터 */
  data: {
    /** 던전명 */
    dungeonName?: string;
    /** 레벨 */
    level?: number;
    /** 결과 */
    result?: string;
    /** 클리어 시간 */
    clearTime?: string;
    /** 파티원 목록 */
    partyMembers?: string[];
    /** 아이템명 */
    itemName?: string;
    /** 아이템 ID */
    itemId?: string;
    /** 강화 레벨 */
    reinforceLevel?: number;
    /** 업그레이드 레벨 */
    upgradeLevel?: number;
    /** 인챈트명 */
    enchantName?: string;
    /** 증폭명 */
    amplificationName?: string;
    /** 제련 레벨 */
    refineLevel?: number;
  };
}
