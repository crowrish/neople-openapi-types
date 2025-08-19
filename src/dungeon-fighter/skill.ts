/** 캐릭터 스킬 정보 */
export interface CharacterSkill {
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
  /** 스킬 정보 */
  skill: {
    /** 스킬 스타일 */
    style: SkillStyle;
    /** 액티브 스킬 목록 */
    active: SkillInfo[];
    /** 패시브 스킬 목록 */
    passive: SkillInfo[];
  };
}

/** 스킬 스타일 정보 */
export interface SkillStyle {
  /** 액티브 스킬 스타일 */
  active?: SkillStyleInfo[];
  /** 패시브 스킬 스타일 */
  passive?: SkillStyleInfo[];
}

/** 스킬 스타일 상세 정보 */
export interface SkillStyleInfo {
  /** 스킬 ID */
  skillId: string;
  /** 스킬명 */
  name: string;
  /** 스킬 옵션 */
  option: {
    /** 스킬 레벨 */
    level: number;
    /** 스킬 설명 */
    description: string;
    /** 옵션 값 배열 */
    values?: string[];
  };
}

/** 스킬 기본 정보 */
export interface SkillInfo {
  /** 스킬 ID */
  skillId: string;
  /** 스킬명 */
  name: string;
  /** 스킬 옵션 */
  option: {
    /** 스킬 레벨 */
    level: number;
    /** 스킬 설명 */
    description: string;
    /** 옵션 값 배열 */
    values?: string[];
  };
  /** 습득 레벨 */
  requiredLevel: number;
  /** 소모 리소스 타입 */
  costType: string;
}

/** 캐릭터 버프 정보 */
export interface CharacterBuff {
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
  /** 버프 정보 */
  buff: {
    /** 스킬 버프 */
    skillBuff: BuffSkill;
    /** 장비 버프 */
    equipmentBuff: BuffEquipment;
    /** 아바타 버프 */
    avatarBuff: BuffAvatar;
    /** 크리처 버프 */
    creatureBuff: BuffCreature;
  };
}

/** 스킬 버프 정보 */
export interface BuffSkill {
  /** 스킬 정보 */
  skillInfo: {
    /** 스킬 ID */
    skillId: string;
    /** 스킬명 */
    name: string;
    /** 스킬 옵션 */
    option: {
      /** 스킬 레벨 */
      level: number;
      /** 스킬 설명 */
      description: string;
    };
  };
  /** 능력치 변화 */
  status?: { name: string; value: number | string }[];
}

/** 장비 버프 정보 */
export interface BuffEquipment {
  /** 강화/증폭 정보 */
  reinforce?: {
    /** 강화 수치 */
    reinforce: number;
    /** 증폭 수치 */
    amplification: number;
  };
  /** 능력치 변화 */
  status?: { name: string; value: number | string }[];
}

/** 아바타 버프 정보 */
export interface BuffAvatar {
  /** 능력치 변화 */
  status?: { name: string; value: number | string }[];
}

/** 크리처 버프 정보 */
export interface BuffCreature {
  /** 능력치 변화 */
  status?: { name: string; value: number | string }[];
}

/** 직업별 스킬 목록 응답 */
export interface JobSkillListResponse {
  /** 스킬 목록 */
  skills: JobSkill[];
}

/** 직업 스킬 정보 */
export interface JobSkill {
  /** 스킬 ID */
  skillId: string;
  /** 스킬명 */
  name: string;
  /** 습득 레벨 */
  requiredLevel: number;
  /** 스킬 타입 */
  type: 'active' | 'passive';
}

/** 스킬 상세 정보 응답 */
export interface SkillDetailResponse {
  /** 스킬명 */
  name: string;
  /** 스킬 타입 */
  type: 'active' | 'passive';
  /** 기본 설명 */
  desc: string;
  /** 상세 설명 */
  descDetail?: string;
  /** 소모 아이템 */
  consumeItem?: string | null;
  /** 특수 설명 */
  descSpecial?: string[];
  /** 최대 레벨 */
  maxLevel: number;
  /** 습득 레벨 */
  requiredLevel: number;
  /** 습득 레벨 범위 */
  requiredLevelRange?: number;
  /** 선행 스킬 */
  preRequiredSkill?: string | null;
  /** 직업 ID */
  jobId: string;
  /** 직업명 */
  jobName: string;
  /** 전직 레벨 */
  jobGrowLevel?: any[];
  /** 레벨별 정보 */
  levelInfo: SkillLevelInfo;
}

/** 스킬 레벨 정보 */
export interface SkillLevelInfo {
  /** 옵션 설명 */
  optionDesc?: string | null;
  /** 레벨별 상세 정보 */
  rows: SkillLevelDetail[];
}

/** 스킬 레벨 상세 정보 */
export interface SkillLevelDetail {
  /** 레벨 */
  level: number;
  /** MP 소모량 */
  consumeMp?: number | null;
  /** 쿨타임 */
  coolTime?: number | null;
  /** 캐스팅 타임 */
  castingTime?: number | null;
  /** 옵션 값 */
  optionValue?: Record<string, number> | null;
}

/** 다중 스킬 조회 응답 */
export interface MultiSkillResponse {
  /** 스킬 목록 */
  rows: SkillDetailResponse[];
}
