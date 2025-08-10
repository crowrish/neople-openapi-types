/** 사이퍼(캐릭터) 정보 */
export interface CypherInfo {
  characterId: string;
  characterName: string;
  school: string;
  mastery: string;
  weapon: string;
  attackType: string;
  resourceType: string;
  damageType: string;
  position: string;
  characterVoice: string;
  characterBackStory: string;
}

/** 사이퍼 상세 정보 */
export interface CypherDetail extends CypherInfo {
  characterAbility?: CypherAbility;
  characterSkill?: CypherSkill[];
}

/** 사이퍼 능력치 */
export interface CypherAbility {
  health: number;
  healthRegen: number;
  resource: number;
  resourceRegen: number;
  attackDamage: number;
  armor: number;
  magicRegist: number;
  moveSpeed: number;
  attackSpeed: number;
  attackRange: number;
  skillAttackRange: number;
}

/** 사이퍼 스킬 정보 */
export interface CypherSkill {
  slotId: string;
  slotName: string;
  skillId: string;
  skillName: string;
  skillType: string;
  skillKeyword: string;
  skillExplain: string;
  skillExplainDetail: string;
  skillCoolTime: string;
  skillCostResource: string;
  skillRange: string;
}

/** 사이퍼 검색 결과 */
export interface CypherSearch {
  characterId: string;
  characterName: string;
  school: string;
  mastery: string;
  weapon: string;
  attackType: string;
  position: string;
}

/** 추천 아이템 정보 */
export interface CypherRecommendItem {
  characterId: string;
  characterName: string;
  recommendItems: RecommendItemSlot[];
}

/** 추천 아이템 슬롯 */
export interface RecommendItemSlot {
  slotCode: string;
  slotName: string;
  items: RecommendItem[];
}

/** 추천 아이템 */
export interface RecommendItem {
  itemId: string;
  itemName: string;
  rarityCode: string;
  equipSlotCode: string;
  itemTypeCode: string;
}