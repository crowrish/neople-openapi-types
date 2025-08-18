export interface Timeline {
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
  timeline: TimelineItem[];
}

export interface TimelineItem {
  date: string;
  code: string;
  name: string;
  data: {
    dungeonName?: string;
    level?: number;
    result?: string;
    clearTime?: string;
    partyMembers?: string[];
    itemName?: string;
    itemId?: string;
    reinforceLevel?: number;
    upgradeLevel?: number;
    enchantName?: string;
    amplificationName?: string;
    refineLevel?: number;
  };
}
