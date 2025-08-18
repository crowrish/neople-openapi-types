# neople-openapi-types

<img width="1200" height="400" alt="Frame 3" src="https://github.com/user-attachments/assets/31af878e-f425-4b54-b7e2-bebd2e73e897" />


[네오플 Open API](https://developers.neople.co.kr/)를 위한 포괄적인 TypeScript 타입 정의 라이브러리입니다.

## 설치

```bash
npm install -D neople-openapi-types
```

## 🎮 지원 게임

- **던전앤파이터 (Dungeon Fighter Online)** - 34개 API 엔드포인트
- **사이퍼즈 (Cyphers)** - 11개 API 엔드포인트

## 사용법

### 기본 사용법

```typescript
import type { 
  // 공통 타입
  ApiResponse, 
  HttpStatusCode, 
  NeopleApiException,
  
  // 던전앤파이터
  DungeonFighter,
  
  // 사이퍼즈
  Cyphers 
} from 'neople-openapi-types';
```


### 사이퍼즈 API 사용 예시

#### 타입 정의만 사용하기

```typescript
import type { 
  PlayerSearchParams, 
  PlayerSearchResponse 
} from 'neople-openapi-types';

// 플레이어 검색 파라미터 타입 정의
const searchParams: PlayerSearchParams = {
  nickname: '플레이어명',
  wordType: 'match',
  limit: 50
};

// 응답 타입 정의 (axios, fetch 등 원하는 HTTP 클라이언트 사용)
const response = await fetch(
  `/cy/players?nickname=${searchParams.nickname}&limit=${searchParams.limit}`,
  { headers: { 'apikey': process.env.NEOPLE_OPENAPI_CYPHERS_KEY } }
);
const results: PlayerSearchResponse = await response.json();
```

#### API 클라이언트 인터페이스 활용하기

```typescript
import type { 
  CyphersApiClient,
  CyphersApiConfig,
  PlayerSearchParams 
} from 'neople-openapi-types';

// API 클라이언트 설정
const config: CyphersApiConfig = {
  apiKey: process.env.NEOPLE_OPENAPI_CYPHERS_KEY!,
  baseURL: 'https://api.neople.co.kr',
  timeout: 10000
};

// 클라이언트 구현체를 만들어서 사용
class MyCyphersApiClient implements CyphersApiClient {
  constructor(private config: CyphersApiConfig) {}
  
  async searchPlayers(params: PlayerSearchParams) {
    // 실제 API 호출 로직 구현
    // ...
  }
  // 다른 메서드들도 구현
}

const client = new MyCyphersApiClient(config);
const results = await client.searchPlayers({ nickname: '플레이어명' });
```

### 던전앤파이터 API 사용 예시

```typescript
import { 
  CharacterSearchParams,
  CharacterEquipmentParams,
  DFServer 
} from 'neople-openapi-types';

// 캐릭터 검색 파라미터
const searchParams: CharacterSearchParams = {
  serverId: 'anton',
  characterName: '캐릭터명',
  wordType: 'match',
  limit: 10
};

// 캐릭터 장비 조회 파라미터
const equipParams: CharacterEquipmentParams = {
  serverId: 'anton',
  characterId: 'characterId123'
};

// 실제 API 호출 (fetch, axios 등 사용)
const searchUrl = `/df/servers/${searchParams.serverId}/characters?characterName=${searchParams.characterName}`;
const equipUrl = `/df/servers/${equipParams.serverId}/characters/${equipParams.characterId}/equip/equipment`;
```

### 에러 처리

```typescript
import axios from 'axios';
import type { 
  PlayerInfoParams,
  PlayerInfo,
  NeopleApiException
} from 'neople-openapi-types';
import { 
  isApiKeyError,
  isRateLimitError,
  isMaintenanceError 
} from 'neople-openapi-types';

// 사용자가 직접 구현한 API 호출 함수
async function getPlayerInfo(params: PlayerInfoParams): Promise<PlayerInfo> {
  try {
    const response = await axios.get(`/cy/players/${params.playerId}`, {
      headers: {
        'apikey': process.env.NEOPLE_OPENAPI_CYPHERS_KEY
      },
      baseURL: 'https://api.neople.co.kr'
    });
    return response.data;
  } catch (error) {
    // axios 에러를 NeopleApiException으로 변환
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const code = error.response?.data?.error?.code || 'SYSTEM_ERROR';
      const message = error.response?.data?.error?.message || error.message;
      throw new NeopleApiException(message, status, code);
    }
    throw error;
  }
}

// 에러 처리 예시
try {
  const playerInfo = await getPlayerInfo({ playerId: 'player123' });
  console.log(playerInfo);
} catch (error) {
  if (isApiKeyError(error)) {
    console.log('API 키를 확인해주세요');
  } else if (isRateLimitError(error)) {
    console.log('요청 한도를 초과했습니다');
  } else if (isMaintenanceError(error)) {
    console.log('현재 점검 중입니다');
  } else {
    console.log('알 수 없는 오류:', error.message);
  }
}
```

## API 엔드포인트 참조

모든 타입 정의에는 실제 API 엔드포인트가 JSDoc으로 문서화되어 있습니다:

### 사이퍼즈 API
#### 플레이어 & 매치
- **플레이어 검색** `GET /cy/players`  
  `PlayerSearchParams` → `PlayerSearchResponse`
- **플레이어 정보** `GET /cy/players/{playerId}`  
  `PlayerInfoParams` → `PlayerInfo`
- **매치 기록** `GET /cy/players/{playerId}/matches`  
  `PlayerMatchesParams` → `PlayerMatches`
- **매치 상세** `GET /cy/matches/{matchId}`  
  `MatchDetailParams` → `MatchDetail`

#### 랭킹
- **전체 랭킹** `GET /cy/ranking/ratingpoint`  
  `OverallRankingParams` → `RankingInfo`
- **캐릭터별 랭킹** `GET /cy/ranking/characters/{characterId}/{rankingType}`  
  `CharacterRankingParams` → `RankingInfo`
- **투신전 랭킹** `GET /cy/ranking/tsj/{tsjType}`  
  `TSJRankingParams` → `TSJRankingResponse`

#### 아이템 & 사이퍼
- **아이템 검색** `GET /cy/battleitems`  
  `ItemSearchParams` → `ItemSearchResponse`
- **아이템 상세** `GET /cy/battleitems/{itemId}`  
  `ItemDetailParams` → `ItemDetailResponse`
- **다중 아이템** `GET /cy/multi/battleitems`  
  `MultiItemParams` → `MultiItemResponse`
- **사이퍼 정보** `GET /cy/characters`  
  `CypherInfoParams` → `CypherInfoResponse`

### 던전앤파이터 API

#### 서버 & 캐릭터 기본
- **서버 목록** `GET /df/servers`  
  → `ServerListResponse`
- **캐릭터 검색** `GET /df/servers/{serverId}/characters`  
  `CharacterSearchParams` → `CharacterSearchResponse`
- **캐릭터 기본정보** `GET /df/servers/{serverId}/characters/{characterId}`  
  `CharacterBasicParams` → `CharacterBasicResponse`
- **캐릭터 타임라인** `GET /df/servers/{serverId}/characters/{characterId}/timeline`  
  `CharacterTimelineParams` → `CharacterTimelineResponse`
- **캐릭터 능력치** `GET /df/servers/{serverId}/characters/{characterId}/status`  
  `CharacterStatusParams` → `CharacterStatusResponse`
- **캐릭터 명성 검색** `GET /df/servers/{serverId}/characters-fame`  
  `CharacterFameSearchParams` → `CharacterFameSearchResponse`

#### 캐릭터 장비
- **캐릭터 장비** `GET /df/servers/{serverId}/characters/{characterId}/equip/equipment`  
  `CharacterEquipmentParams` → `CharacterEquipmentResponse`
- **캐릭터 아바타** `GET /df/servers/{serverId}/characters/{characterId}/equip/avatar`  
  `CharacterAvatarParams` → `CharacterAvatarResponse`
- **캐릭터 크리처** `GET /df/servers/{serverId}/characters/{characterId}/equip/creature`  
  `CharacterCreatureParams` → `CharacterCreatureResponse`
- **캐릭터 휘장** `GET /df/servers/{serverId}/characters/{characterId}/equip/flag`  
  `CharacterFlagParams` → `CharacterFlagResponse`

#### 캐릭터 스킬 & 버프
- **캐릭터 스킬 스타일** `GET /df/servers/{serverId}/characters/{characterId}/skill/style`  
  `CharacterSkillStyleParams` → `CharacterSkillStyleResponse`
- **캐릭터 버프 장비** `GET /df/servers/{serverId}/characters/{characterId}/skill/buff/equip/equipment`  
  `CharacterBuffEquipmentParams` → `CharacterBuffEquipmentResponse`
- **캐릭터 버프 아바타** `GET /df/servers/{serverId}/characters/{characterId}/skill/buff/equip/avatar`  
  `CharacterBuffAvatarParams` → `CharacterBuffAvatarResponse`
- **캐릭터 버프 크리처** `GET /df/servers/{serverId}/characters/{characterId}/skill/buff/equip/creature`  
  `CharacterBuffCreatureParams` → `CharacterBuffCreatureResponse`

#### 경매장
- **경매장 검색** `GET /df/auction`  
  `AuctionSearchParams` → `AuctionSearchResponse`
- **경매장 상세** `GET /df/auction/{auctionNo}`  
  `AuctionDetailParams` → `AuctionDetailResponse`
- **경매장 판매내역** `GET /df/auction-sold`  
  `AuctionSoldParams` → `AuctionSoldResponse`

#### 아바타 마켓
- **아바타 마켓 판매상품** `GET /df/avatar-market/sale`  
  `AvatarMarketSaleParams` → `AvatarMarketSaleResponse`
- **아바타 마켓 상품상세** `GET /df/avatar-market/sale/{goodsNo}`  
  `AvatarMarketSaleDetailParams` → `AvatarMarketSaleDetailResponse`
- **아바타 마켓 판매내역** `GET /df/avatar-market/sold`  
  `AvatarMarketSoldParams` → `AvatarMarketSoldResponse`
- **아바타 마켓 판매완료상품** `GET /df/avatar-market/sold/{goodsNo}`  
  `AvatarMarketSoldDetailParams` → `AvatarMarketSoldDetailResponse`
- **아바타 마켓 해시태그** `GET /df/avatar-market/hashtag`  
  `AvatarMarketHashtagParams` → `AvatarMarketHashtagResponse`

#### 아이템
- **아이템 검색** `GET /df/items`  
  `ItemSearchParams` → `ItemSearchResponse`
- **아이템 상세** `GET /df/items/{itemId}`  
  `ItemDetailParams` → `ItemDetailResponse`
- **아이템 상점정보** `GET /df/items/{itemId}/shop`  
  `ItemShopParams` → `ItemShopResponse`
- **다중 아이템** `GET /df/multi/items`  
  `MultiItemParams` → `MultiItemInfoResponse`
- **아이템 해시태그** `GET /df/item-hashtag`  
  `ItemHashtagParams` → `ItemHashtagResponse`

#### 세트 아이템
- **세트아이템 검색** `GET /df/setitems`  
  `SetItemSearchParams` → `SetItemSearchResponse`
- **세트아이템 상세** `GET /df/setitems/{setItemId}`  
  `SetItemParams` → `SetItemInfoResponse`
- **다중 세트아이템** `GET /df/multi/setitems`  
  `MultiSetItemParams` → `MultiSetItemResponse`

#### 직업 & 스킬
- **직업 목록** `GET /df/jobs`  
  → `JobListResponse`
- **직업별 스킬목록** `GET /df/skills/{jobId}`  
  `JobSkillListParams` → `JobSkillListResponse`
- **스킬 상세** `GET /df/skills/{jobId}/{skillId}`  
  `SkillDetailParams` → `SkillDetailResponse`
- **다중 스킬** `GET /df/multi/skills/{jobId}`  
  `MultiSkillParams` → `MultiSkillResponse`

## 📊 API 커버리지 상태

### ✅ 완료된 구현
- **던전앤파이터**: 34/34 엔드포인트 (100%) - 파라미터 + 응답 타입 완료
- **사이퍼즈**: 11/11 엔드포인트 (100%) - 파라미터 + 응답 타입 완료
- **총 45개 API 엔드포인트 완전 지원**

## 주요 타입

### 공통 타입

#### API 응답 및 요청
- **`ApiResponse<T>`** - 모든 네오플 API의 표준 응답 구조
  ```typescript
  interface ApiResponse<T> {
    rows: T[];
    next?: string;
    totalCount?: number;
  }
  ```

- **`ApiRequestOptions`** - API 요청 시 공통 옵션 (페이지네이션 포함)
- **`PaginationParams`** - 페이지네이션을 위한 파라미터 (`limit`, `offset`)

#### 날짜 및 시간
- **`DateString`** - 날짜 문자열 (`YYYY-MM-DD` 형식)
- **`DateTimeString`** - 날짜시간 문자열 (ISO 8601 형식)

#### 에러 처리
- **`ApiError`** - API 에러 응답의 기본 구조
- **`NeopleApiError`** - 네오플 API 에러 인터페이스
- **`NeopleApiException`** - 네오플 API 전용 예외 클래스
- **`HttpStatusCode`** - HTTP 상태 코드 열거형 (200, 400, 401, 403, 404, 500 등)

#### 유틸리티 타입
- **`RequireField<T, K>`** - 선택적 필드를 필수로 만드는 유틸리티 타입
- **`SelectFields<T, K>`** - 특정 필드만 선택하는 유틸리티 타입

### 서버 및 게임 환경

#### 던전앤파이터 서버
- **`DFServer`** - 던파의 8개 서버 식별자
  - `'anton'`, `'bakal'`, `'cain'`, `'casillas'`, `'diregie'`, `'hilder'`, `'prey'`, `'siroco'`
- **`DF_SERVERS`** - 서버 코드와 한글명 매핑 상수

#### 사이퍼즈 게임 모드
- **`CyphersGameType`** - 사이퍼즈 게임 타입 구분
  - `'rating'`: 공식 랭킹전
  - `'normal'`: 일반 게임
- **`CYPHERS_GAME_TYPES`** - 게임 타입과 한글명 매핑 상수

### 게임별 전용 타입

#### 던전앤파이터 전용
- **`DFItemRarity`** - 던파 아이템 희귀도 (common, uncommon, rare, unique, epic, chronicle, legendary, myth)
- **`DF_ITEM_RARITIES`** - 아이템 희귀도와 한글명 매핑 상수
  ```typescript
  import { DungeonFighter } from 'neople-openapi-types';
  const rarity: DungeonFighter.DFItemRarity = 'epic';
  ```

#### 사이퍼즈 전용  
- **`CyphersItemRarity`** - 사이퍼즈 아이템 등급 ('101', '102', '103', '104')
- **`CYPHERS_ITEM_RARITIES`** - 아이템 등급과 한글명 매핑 상수
- **`CyphersTier`** - 사이퍼즈 랭킹 티어 (BRONZE, SILVER, GOLD, DIAMOND, JOKER, ACE)
- **`CYPHERS_TIERS`** - 랭킹 티어와 한글명 매핑 상수
  ```typescript
  import { Cyphers } from 'neople-openapi-types';
  const tier: Cyphers.CyphersTier = 'ACE';
  const rarity: Cyphers.CyphersItemRarity = '104';
  ```

### 에러 코드 시스템

네오플 API는 체계적인 에러 코드를 제공합니다:

#### 공통 에러 코드
- **`CommonApiErrorCode`** - 모든 API 공통 에러 (`API000`~`API999`)
  - 인증 오류, 요청 제한, 서버 오류 등

#### 게임별 전용 에러
- **`DnfErrorCode`** - 던전앤파이터 전용 (`DNF000`~`DNF999`)
- **`CyphersErrorCode`** - 사이퍼즈 전용 (`CY001`~`CY999`)

#### 통합 타입
- **`ApiErrorCode`** - 모든 에러 코드를 통합한 유니온 타입

#### 에러 메시지 및 상수
- **`HTTP_STATUS_TO_ERROR`** - HTTP 상태 코드별 에러 메시지 매핑
- **`ERROR_MESSAGES`** - 에러 코드별 상세 메시지 매핑

### 던전앤파이터 (DungeonFighter) 타입

#### 캐릭터 시스템
던전앤파이터의 캐릭터 관련 정보를 다루는 타입들입니다:

- **`CharacterSearch`** - 캐릭터 검색 결과 (캐릭터명으로 검색)
- **`CharacterBasic`** - 캐릭터 기본 정보 (레벨, 직업, 길드 등)
- **`CharacterStatus`** - 캐릭터 능력치 및 스탯 정보
- **`CharacterStat`** - 개별 능력치 정보 (힘, 지능, 체력 등)
- **`CharacterEquipment`** - 착용 중인 장비 정보 및 인챈트/증폭
- **`EquipmentItem`** - 개별 장비 아이템 정보
- **`EnchantStat`** - 인챈트 능력치 정보
- **`CharacterAvatar`** - 아바타 장착 정보 (상의, 하의, 모자 등)
- **`AvatarItem`** - 개별 아바타 아이템 정보
- **`CharacterCreature`** - 크리처 및 아티팩트 정보
- **`CreatureInfo`** - 크리처 상세 정보
- **`ArtifactInfo`** - 아티팩트 상세 정보
- **`CharacterFlag`** - 휘장 시스템 관련 정보
- **`FlagInfo`** - 휘장 상세 정보
- **`GemInfo`** - 보석 정보
- **`CharacterTalisman`** - 탈리스만(부적) 및 룬 정보
- **`TalismanInfo`** - 탈리스만 상세 정보
- **`RuneInfo`** - 룬 상세 정보

#### 스킬 및 버프 시스템
캐릭터의 스킬과 각종 버프 효과를 나타내는 타입들:

- **`CharacterSkill`** - 캐릭터가 습득한 스킬 목록 및 레벨
- **`SkillStyle`** - 스킬 스타일 (액티브/패시브) 정보
- **`SkillStyleInfo`** - 스킬 스타일 상세 정보
- **`SkillInfo`** - 개별 스킬의 상세 정보
- **`CharacterBuff`** - 적용 중인 버프 효과들 (장비, 아바타, 크리처 등)
- **`BuffSkill`** - 스킬 버프 정보
- **`BuffEquipment`** - 장비 버프 정보
- **`BuffAvatar`** - 아바타 버프 정보
- **`BuffCreature`** - 크리처 버프 정보

#### 아이템 및 거래 시스템
아이템 정보와 경매장 거래 관련 타입들:

- **`ItemSearch`** - 아이템 검색 결과 (이름, 등급별 검색)
- **`ItemDetail`** - 아이템 상세 정보 (옵션, 설명, 획득 방법)
- **`ItemStatus`** - 아이템 상태 정보
- **`SetItemInfo`** - 세트 아이템 정보 및 세트 효과
- **`SetItem`** - 세트 아이템 개별 정보
- **`SetItemOption`** - 세트 효과 옵션 정보
- **`MultiItemInfo`** - 멀티 아이템(조각) 정보
- **`MultiItem`** - 멀티 아이템 개별 정보
- **`ItemShop`** - 아이템 상점 정보
- **`PackageInfo`** - 패키지 정보
- **`PackageItem`** - 패키지 아이템 정보
- **`AuctionSearch`** - 경매장 현재 판매 중인 아이템
- **`AuctionItem`** - 경매장 아이템 정보
- **`AuctionSold`** - 경매장 판매 완료 내역

#### 활동 기록
- **`Timeline`** - 캐릭터의 최근 활동 기록 (던전 클리어, 아이템 획득 등)
- **`TimelineItem`** - 개별 활동 기록 정보

#### API 파라미터 및 응답 타입
던전앤파이터 API 호출을 위한 완전한 타입 지원 (34개 엔드포인트):

**캐릭터 시스템 (14개 엔드포인트)**
- **`CharacterSearchParams`** / **`CharacterSearchResponse`** - 캐릭터 검색
- **`CharacterBasicParams`** / **`CharacterBasicResponse`** - 캐릭터 기본 정보 조회
- **`CharacterTimelineParams`** / **`CharacterTimelineResponse`** - 캐릭터 타임라인 조회
- **`CharacterStatusParams`** / **`CharacterStatusResponse`** - 캐릭터 능력치 조회
- **`CharacterEquipmentParams`** / **`CharacterEquipmentResponse`** - 캐릭터 장비 조회
- **`CharacterAvatarParams`** / **`CharacterAvatarResponse`** - 캐릭터 아바타 조회
- **`CharacterCreatureParams`** / **`CharacterCreatureResponse`** - 캐릭터 크리처 조회
- **`CharacterFlagParams`** / **`CharacterFlagResponse`** - 캐릭터 휘장 조회
- **`CharacterSkillStyleParams`** / **`CharacterSkillStyleResponse`** - 캐릭터 스킬 스타일 조회
- **`CharacterBuffEquipmentParams`** / **`CharacterBuffEquipmentResponse`** - 버프 스킬 강화 장비 조회
- **`CharacterBuffAvatarParams`** / **`CharacterBuffAvatarResponse`** - 버프 스킬 강화 아바타 조회
- **`CharacterBuffCreatureParams`** / **`CharacterBuffCreatureResponse`** - 버프 스킬 강화 크리처 조회
- **`CharacterFameSearchParams`** / **`CharacterFameSearchResponse`** - 캐릭터 명성 검색

**경매장 시스템 (3개 엔드포인트)**
- **`AuctionSearchParams`** / **`AuctionSearchResponse`** - 경매장 검색
- **`AuctionDetailParams`** / **`AuctionDetailResponse`** - 경매장 상세 조회
- **`AuctionSoldParams`** / **`AuctionSoldResponse`** - 경매장 판매내역 조회

**아바타 마켓 (5개 엔드포인트)**
- **`AvatarMarketSaleParams`** / **`AvatarMarketSaleResponse`** - 아바타 마켓 판매 상품
- **`AvatarMarketSaleDetailParams`** / **`AvatarMarketSaleDetailResponse`** - 아바타 마켓 상품 상세
- **`AvatarMarketSoldParams`** / **`AvatarMarketSoldResponse`** - 아바타 마켓 판매 내역
- **`AvatarMarketSoldDetailParams`** / **`AvatarMarketSoldDetailResponse`** - 아바타 마켓 판매 완료 상품
- **`AvatarMarketHashtagParams`** / **`AvatarMarketHashtagResponse`** - 아바타 마켓 해시태그

**아이템 시스템 (8개 엔드포인트)**
- **`ItemSearchParams`** / **`ItemSearchResponse`** - 아이템 검색
- **`ItemDetailParams`** / **`ItemDetailResponse`** - 아이템 상세 조회
- **`ItemShopParams`** / **`ItemShopResponse`** - 아이템 상점 정보
- **`MultiItemParams`** / **`MultiItemInfoResponse`** - 다중 아이템 조회
- **`ItemHashtagParams`** / **`ItemHashtagResponse`** - 아이템 해시태그
- **`SetItemSearchParams`** / **`SetItemSearchResponse`** - 세트 아이템 검색
- **`SetItemParams`** / **`SetItemInfoResponse`** - 세트 아이템 조회
- **`MultiSetItemParams`** / **`MultiSetItemResponse`** - 다중 세트 아이템 조회

**직업 및 스킬 시스템 (4개 엔드포인트)**
- **`JobListResponse`** - 직업 목록 조회
- **`JobSkillListParams`** / **`JobSkillListResponse`** - 직업별 스킬 목록 조회
- **`SkillDetailParams`** / **`SkillDetailResponse`** - 스킬 상세 정보 조회
- **`MultiSkillParams`** / **`MultiSkillResponse`** - 다중 스킬 조회

### 사이퍼즈 (Cyphers) 타입

#### 플레이어 시스템
사이퍼즈의 플레이어 및 랭킹 시스템 관련 타입들:

- **`PlayerInfo`** - 플레이어 기본 정보 (닉네임, 레벨, 플레이 통계)
- **`PlayerMatches`** - 플레이어의 최근 매치 기록 목록
- **`MatchRecord`** - 개별 매치 기록 정보
- **`RankingInfo`** - 전체 랭킹 정보 (TOP 랭커 목록)
- **`TSJRankingResponse`** - 투신전 랭킹 응답 (v0.3.0 추가)
- **`PlayerRanking`** - 개별 플레이어의 랭킹 데이터 및 티어 정보

#### 매치 및 게임 데이터
실시간 전투 및 매치 결과를 나타내는 타입들:

- **`MatchDetail`** - 매치 상세 정보 (게임 결과, 진행 시간, 맵 정보)
- **`MatchTeam`** - 팀 정보 (팀원 구성, 팀 점수)
- **`MatchPlayer`** - 매치 내 플레이어 개별 성과 (킬/데스, 데미지 등)
- **`MatchPlayerItem`** - 매치 내 플레이어 아이템 정보
- **`Position`** - 맵 내 플레이어 위치 좌표 정보
- **`PositionMap`** - 위치 좌표 매핑 정보

#### 아이템 및 장비 시스템
배틀 아이템과 캐릭터 장비 관련 타입들:

- **`ItemInfo`** - 배틀 아이템 기본 정보 (이름, 등급, 슬롯)
- **`ItemDetail`** - 아이템 상세 정보 (효과, 획득 방법, 튜닝 정보)
- **`ItemDetailResponse`** - 아이템 상세 조회 응답 (v0.3.0 추가)
- **`MultiItemResponse`** - 다중 아이템 조회 응답 (v0.3.0 추가)
- **`ItemSearch`** - 아이템 검색 결과
- **`ItemTuning`** - 아이템 튜닝 및 강화 정보

#### 사이퍼 캐릭터 정보
플레이 가능한 사이퍼 캐릭터들의 정보:

- **`CypherInfo`** - 사이퍼 기본 정보 (이름, 역할군, 출시일)
- **`CypherDetail`** - 사이퍼 상세 정보 (스토리, 컨셉)
- **`CypherAbility`** - 사이퍼의 능력치 정보
- **`CypherSkill`** - 사이퍼의 스킬 목록 및 설명
- **`CypherSearch`** - 사이퍼 검색 결과
- **`CypherRecommendItem`** - 사이퍼별 추천 배틀 아이템 조합
- **`RecommendItemSlot`** - 추천 아이템 슬롯 정보
- **`RecommendItem`** - 개별 추천 아이템 정보

#### 개발자 도구
API 클라이언트 구현을 위한 인터페이스와 설정:

- **`CyphersApiClient`** - 사이퍼즈 API 클라이언트 인터페이스 (구현 가이드라인)
- **`CyphersApiConfig`** - API 클라이언트 설정 (API 키, 베이스 URL 등)
- **`ApiRequestOptions`** - API 요청 옵션 (사이퍼즈 전용)
- **`CYPHERS_API_ENDPOINTS`** - 모든 API 엔드포인트 상수 모음
- **`CyphersApiEndpoint`** - 사이퍼즈 API 엔드포인트 타입

#### API 파라미터 및 응답 타입
사이퍼즈 API 호출을 위한 파라미터와 응답 타입들:

- **`PlayerSearchParams`** - 플레이어 검색 파라미터
- **`PlayerSearchResponse`** - 플레이어 검색 응답
- **`PlayerSearchResult`** - 플레이어 검색 결과 개별 항목
- **`PlayerInfoParams`** - 플레이어 정보 조회 파라미터
- **`PlayerMatchesParams`** - 플레이어 매치 기록 조회 파라미터
- **`MatchDetailParams`** - 매치 상세 조회 파라미터
- **`RankingParams`** - 랭킹 조회 기본 파라미터
- **`OverallRankingParams`** - 전체 랭킹 조회 파라미터
- **`CharacterRankingParams`** - 캐릭터별 랭킹 조회 파라미터
- **`ItemSearchParams`** - 아이템 검색 파라미터
- **`ItemSearchResponse`** - 아이템 검색 응답
- **`ItemSearchResult`** - 아이템 검색 결과 개별 항목
- **`PlayerEquipmentParams`** - 플레이어 장비 조회 파라미터
- **`CypherInfoParams`** - 사이퍼 정보 조회 파라미터
- **`CypherInfoResponse`** - 사이퍼 정보 조회 응답
- **`CypherSearchResult`** - 사이퍼 검색 결과 개별 항목
- **`RecommendItemParams`** - 추천 아이템 조회 파라미터

### 동일한 이름의 타입 구분하기

일부 타입은 던전앤파이터와 사이퍼즈에서 동일한 이름을 사용합니다. 이런 경우 네임스페이스를 통해 구분하여 사용하세요:

#### 네임스페이스를 통한 구분 사용
```typescript
import type { DungeonFighter, Cyphers } from 'neople-openapi-types';

// 던전앤파이터의 ItemDetail 사용
const dfItem: DungeonFighter.ItemDetail = {
  itemId: "df001",
  itemName: "던파 아이템",
  itemRarity: "common",
  itemTypeId: "weapon",
  // ... 던파 전용 필드들
};

// 사이퍼즈의 ItemDetail 사용  
const cyItem: Cyphers.ItemDetail = {
  itemId: "cy001",
  itemName: "사이퍼즈 아이템", 
  slotCode: "weapon",
  rarityCode: "101",
  // ... 사이퍼즈 전용 필드들
};
```

#### 직접 import로 별칭 사용
```typescript
import type { ItemDetail as DFItemDetail } from 'neople-openapi-types/dungeon-fighter';
import type { ItemDetail as CyItemDetail } from 'neople-openapi-types/cyphers';

const dfItem: DFItemDetail = {
  itemId: "df001",
  itemName: "던파 아이템",
  itemRarity: "common"
  // ... 던파 전용 필드들
};

const cyItem: CyItemDetail = {
  itemId: "cy001", 
  itemName: "사이퍼즈 아이템",
  slotCode: "weapon"
  // ... 사이퍼즈 전용 필드들
};
```

## 개발

### 프로젝트 구조

```
src/
├── common/           # 공통 타입 및 유틸리티
│   ├── index.ts
│   ├── servers.ts    # 서버 정보 (DFServer, CyphersGameType)
│   ├── codes.ts      # HTTP/에러 코드
│   └── errors.ts     # 에러 처리
├── cyphers/          # 사이퍼즈 API 타입
│   ├── api.ts        # API 파라미터 타입
│   ├── client.ts     # 클라이언트 인터페이스
│   ├── character.ts  # 플레이어/매치 타입
│   ├── matches.ts    # 매치 상세 타입
│   ├── item.ts       # 아이템 타입
│   ├── cypher.ts     # 사이퍼 캐릭터 타입
│   ├── enums.ts      # 사이퍼즈 전용 enum (CyphersTier, CyphersItemRarity)
│   └── index.ts
├── dungeon-fighter/  # 던전앤파이터 API 타입
│   ├── api.ts        # API 파라미터 타입
│   ├── character.ts  # 캐릭터 타입
│   ├── skill.ts      # 스킬/버프 타입
│   ├── item.ts       # 아이템 타입
│   ├── auction.ts    # 경매장 타입
│   ├── timeline.ts   # 타임라인 타입
│   ├── enums.ts      # 던전앤파이터 전용 enum (DFItemRarity)
│   └── index.ts
└── index.ts          # 메인 export
```

### 빌드

```bash
npm run build    # TypeScript 컴파일
npm run clean    # dist 폴더 정리
```

## 라이선스

MIT License

이 라이브러리는 MIT 라이선스 하에 배포되며, 네오플 Open API 서비스의 이용약관을 준수합니다.

**중요 사항:**
- 이 라이브러리는 네오플 Open API의 **비공식** TypeScript 타입 정의입니다.
- 네오플 Open API 서비스 이용 시 네오플의 이용약관을 반드시 준수해야 합니다.

자세한 내용은 [네오플 Open API 이용정책](https://developers.neople.co.kr/contents/policy)을 참조하세요.

## 기여

이슈 및 풀 리퀘스트를 환영합니다!

## 지원

- [네오플 개발자센터](https://developers.neople.co.kr/)
- [GitHub Issues](https://github.com/crowrish/neople-openapi-types/issues)

---

네오플 Open API 공식 문서: https://developers.neople.co.kr/
