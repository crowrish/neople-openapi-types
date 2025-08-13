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