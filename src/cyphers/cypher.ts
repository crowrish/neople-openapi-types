/** 사이퍼(캐릭터) 정보 */
export interface CypherInfo {
  /** 캐릭터 ID */
  characterId: string;
  /** 캐릭터명 */
  characterName: string;
  /** 학교 */
  school: string;
  /** 마스터리 */
  mastery: string;
  /** 무기 */
  weapon: string;
  /** 공격 타입 */
  attackType: string;
  /** 리소스 타입 */
  resourceType: string;
  /** 데미지 타입 */
  damageType: string;
  /** 포지션 */
  position: string;
  /** 캐릭터 성우 */
  characterVoice: string;
  /** 캐릭터 배경 스토리 */
  characterBackStory: string;
}

/** 사이퍼 상세 정보 */
export interface CypherDetail extends CypherInfo {
  /** 캐릭터 능력치 */
  characterAbility?: CypherAbility;
  /** 캐릭터 스킬 */
  characterSkill?: CypherSkill[];
}

/** 사이퍼 능력치 */
export interface CypherAbility {
  /** 체력 */
  health: number;
  /** 체력 재생 */
  healthRegen: number;
  /** 리소스 */
  resource: number;
  /** 리소스 재생 */
  resourceRegen: number;
  /** 공격력 */
  attackDamage: number;
  /** 방어력 */
  armor: number;
  /** 마법 저항 */
  magicRegist: number;
  /** 이동속도 */
  moveSpeed: number;
  /** 공격속도 */
  attackSpeed: number;
  /** 공격 사거리 */
  attackRange: number;
  /** 스킬 공격 사거리 */
  skillAttackRange: number;
}

/** 사이퍼 스킬 정보 */
export interface CypherSkill {
  /** 슬롯 ID */
  slotId: string;
  /** 슬롯명 */
  slotName: string;
  /** 스킬 ID */
  skillId: string;
  /** 스킬명 */
  skillName: string;
  /** 스킬 타입 */
  skillType: string;
  /** 스킬 키워드 */
  skillKeyword: string;
  /** 스킬 설명 */
  skillExplain: string;
  /** 스킬 상세 설명 */
  skillExplainDetail: string;
  /** 스킬 쿨타임 */
  skillCoolTime: string;
  /** 스킬 리소스 소모 */
  skillCostResource: string;
  /** 스킬 사거리 */
  skillRange: string;
}

/** 사이퍼 검색 결과 */
export interface CypherSearch {
  /** 캐릭터 ID */
  characterId: string;
  /** 캐릭터명 */
  characterName: string;
  /** 학교 */
  school: string;
  /** 마스터리 */
  mastery: string;
  /** 무기 */
  weapon: string;
  /** 공격 타입 */
  attackType: string;
  /** 포지션 */
  position: string;
}

/** 추천 아이템 정보 */
export interface CypherRecommendItem {
  /** 캐릭터 ID */
  characterId: string;
  /** 캐릭터명 */
  characterName: string;
  /** 추천 아이템 슬롯 */
  recommendItems: RecommendItemSlot[];
}

/** 추천 아이템 슬롯 */
export interface RecommendItemSlot {
  /** 슬롯 코드 */
  slotCode: string;
  /** 슬롯명 */
  slotName: string;
  /** 추천 아이템 목록 */
  items: RecommendItem[];
}

/** 추천 아이템 */
export interface RecommendItem {
  /** 아이템 ID */
  itemId: string;
  /** 아이템명 */
  itemName: string;
  /** 희귀도 코드 */
  rarityCode: string;
  /** 장비 슬롯 코드 */
  equipSlotCode: string;
  /** 아이템 타입 코드 */
  itemTypeCode: string;
}
