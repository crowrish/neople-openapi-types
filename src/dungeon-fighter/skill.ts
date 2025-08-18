export interface CharacterSkill {
  characterId: string;
  characterName: string;
  level: number;
  jobId: string;
  jobGrowId: string;
  jobName: string;
  jobGrowName: string;
  adventureName: string;
  guildId?: string;
  guildName?: string;
  skill: {
    style: SkillStyle;
    active: SkillInfo[];
    passive: SkillInfo[];
  };
}

export interface SkillStyle {
  active?: SkillStyleInfo[];
  passive?: SkillStyleInfo[];
}

export interface SkillStyleInfo {
  skillId: string;
  name: string;
  option: {
    level: number;
    description: string;
    values?: string[];
  };
}

export interface SkillInfo {
  skillId: string;
  name: string;
  option: {
    level: number;
    description: string;
    values?: string[];
  };
  requiredLevel: number;
  costType: string;
}

export interface CharacterBuff {
  characterId: string;
  characterName: string;
  level: number;
  jobId: string;
  jobGrowId: string;
  jobName: string;
  jobGrowName: string;
  adventureName: string;
  guildId?: string;
  guildName?: string;
  buff: {
    skillBuff: BuffSkill;
    equipmentBuff: BuffEquipment;
    avatarBuff: BuffAvatar;
    creatureBuff: BuffCreature;
  };
}

export interface BuffSkill {
  skillInfo: {
    skillId: string;
    name: string;
    option: {
      level: number;
      description: string;
    };
  };
  status?: { name: string; value: number | string }[];
}

export interface BuffEquipment {
  reinforce?: {
    reinforce: number;
    amplification: number;
  };
  status?: { name: string; value: number | string }[];
}

export interface BuffAvatar {
  status?: { name: string; value: number | string }[];
}

export interface BuffCreature {
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
