import { DFServer } from '../common';

export interface CharacterSearch {
  characterId: string;
  characterName: string;
  level: number;
  jobId: string;
  jobGrowId: string;
  jobName: string;
  jobGrowName: string;
}

export interface CharacterBasic {
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
}

export interface CharacterStatus {
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
  stat: CharacterStat[];
}

export interface CharacterStat {
  name: string;
  value: string;
}

export interface CharacterEquipment {
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
  equipment: EquipmentItem[];
}

export interface EquipmentItem {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  reinforce?: number;
  itemGradeName?: string;
  enchant?: {
    stat?: EnchantStat[];
    status?: any[];
  };
  amplificationName?: string;
  refine?: number;
}

export interface EnchantStat {
  name: string;
  value: string;
}

export interface CharacterAvatar {
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
  avatar: AvatarItem[];
}

export interface AvatarItem {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  clone?: {
    itemId: string;
    itemName: string;
  };
  optionAbility?: string;
  rare?: {
    itemId: string;
    itemName: string;
  };
}

export interface CharacterCreature {
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
  creature?: CreatureInfo;
}

export interface CreatureInfo {
  itemId: string;
  itemName: string;
  itemRarity: string;
  clone?: {
    itemId: string;
    itemName: string;
  };
  artifact?: ArtifactInfo[];
}

export interface ArtifactInfo {
  slotColor: string;
  itemId: string;
  itemName: string;
  itemAvailableLevel: number;
  itemRarity: string;
}

export interface CharacterFlag {
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
  flag?: FlagInfo;
}

export interface FlagInfo {
  itemId: string;
  itemName: string;
  itemRarity: string;
  reinforce?: number;
  itemAvailableLevel: number;
  itemObtainInfo: string;
  gems?: GemInfo[];
}

export interface GemInfo {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
}

export interface CharacterTalisman {
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
  talismans?: TalismanInfo[];
}

export interface TalismanInfo {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  runeTypes?: RuneInfo[];
}

export interface RuneInfo {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
}