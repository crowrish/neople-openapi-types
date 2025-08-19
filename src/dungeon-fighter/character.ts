// import { DFServer } from '../common';

/** 캐릭터 검색 결과 */
export interface CharacterSearch {
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
}

/** 캐릭터 기본 정보 */
export interface CharacterBasic {
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
}

/** 캐릭터 능력치 정보 */
export interface CharacterStatus {
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
  /** 능력치 목록 */
  stat: CharacterStat[];
}

/** 캐릭터 능력치 정보 */
export interface CharacterStat {
  /** 능력치명 */
  name: string;
  /** 능력치 값 */
  value: string;
}

/** 캐릭터 장비 정보 */
export interface CharacterEquipment {
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
  /** 장비 목록 */
  equipment: EquipmentItem[];
}

/** 장비 아이템 정보 */
export interface EquipmentItem {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
  /** 강화 수치 */
  reinforce?: number;
  /** 아이템 등급명 */
  itemGradeName?: string;
  /** 인챈트 정보 */
  enchant?: {
    /** 인챈트 능력치 */
    stat?: EnchantStat[];
    /** 인챈트 상태 */
    status?: any[];
  };
  /** 증폭명 */
  amplificationName?: string;
  /** 제련 수치 */
  refine?: number;
}

/** 인챈트 능력치 정보 */
export interface EnchantStat {
  /** 능력치명 */
  name: string;
  /** 능력치 값 */
  value: string;
}

/** 캐릭터 아바타 정보 */
export interface CharacterAvatar {
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
  /** 아바타 목록 */
  avatar: AvatarItem[];
}

/** 아바타 아이템 정보 */
export interface AvatarItem {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
  /** 클론 아바타 정보 */
  clone?: {
    /** 클론 아이템 ID */
    itemId: string;
    /** 클론 아이템명 */
    itemName: string;
  };
  /** 옵션 능력 */
  optionAbility?: string;
  /** 레어 아바타 정보 */
  rare?: {
    /** 레어 아이템 ID */
    itemId: string;
    /** 레어 아이템명 */
    itemName: string;
  };
}

/** 캐릭터 크리처 정보 */
export interface CharacterCreature {
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
  /** 크리처 정보 */
  creature?: CreatureInfo;
}

/** 크리처 상세 정보 */
export interface CreatureInfo {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
  /** 클론 크리처 정보 */
  clone?: {
    /** 클론 아이템 ID */
    itemId: string;
    /** 클론 아이템명 */
    itemName: string;
  };
  /** 아티팩트 목록 */
  artifact?: ArtifactInfo[];
}

/** 아티팩트 정보 */
export interface ArtifactInfo {
  /** 슬롯 색상 */
  slotColor: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 사용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 등급 */
  itemRarity: string;
}

/** 캐릭터 플래그 정보 */
export interface CharacterFlag {
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
  /** 플래그 정보 */
  flag?: FlagInfo;
}

/** 플래그 상세 정보 */
export interface FlagInfo {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
  /** 강화 수치 */
  reinforce?: number;
  /** 아이템 사용 가능 레벨 */
  itemAvailableLevel: number;
  /** 아이템 획득 정보 */
  itemObtainInfo: string;
  /** 젤 목록 */
  gems?: GemInfo[];
}

/** 젤 정보 */
export interface GemInfo {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
}

/** 캐릭터 탈리스만 정보 */
export interface CharacterTalisman {
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
  /** 탈리스만 목록 */
  talismans?: TalismanInfo[];
}

/** 탈리스만 상세 정보 */
export interface TalismanInfo {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
  /** 룬 목록 */
  runeTypes?: RuneInfo[];
}

/** 룬 정보 */
export interface RuneInfo {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 아이템 등급 */
  itemRarity: string;
}
