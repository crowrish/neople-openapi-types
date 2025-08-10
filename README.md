# neople-openapi-types

[네오플 Open API](https://developers.neople.co.kr/)를 위한 포괄적인 TypeScript 타입 정의 라이브러리입니다.

## 설치

```bash
npm install -D neople-openapi-types
```

## 지원 게임

- **던전앤파이터 (Dungeon Fighter Online)**
- **사이퍼즈 (Cyphers)**

## 사용법

### 기본 사용법

```typescript
import { 
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
import { 
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
import { 
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
import { 
  PlayerInfoParams,
  PlayerInfo,
  NeopleApiException,
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

### 사이퍼즈 API 엔드포인트

| 기능 | 타입 |
|------|------|
| 플레이어 검색<br>`GET /cy/players` | `PlayerSearchParams` |
| 플레이어 정보<br>`GET /cy/players/{playerId}` | `PlayerInfoParams` |
| 매치 기록<br>`GET /cy/players/{playerId}/matches` | `PlayerMatchesParams` |
| 매치 상세<br>`GET /cy/matches/{matchId}` | `MatchDetailParams` |
| 전체 랭킹<br>`GET /cy/ranking/ratingpoint` | `OverallRankingParams` |
| 캐릭터별 랭킹<br>`GET /cy/ranking/characters/{characterId}/{rankingType}` | `CharacterRankingParams` |
| 아이템 검색<br>`GET /cy/battleitems` | `ItemSearchParams` |
| 플레이어 장비<br>`GET /cy/players/{playerId}/battleitems` | `PlayerEquipmentParams` |
| 사이퍼 정보<br>`GET /cy/characters` | `CypherInfoParams` |
| 추천 아이템<br>`GET /cy/characters/{characterId}/items` | `RecommendItemParams` |

### 던전앤파이터 API 엔드포인트

| 기능 | 타입 |
|------|------|
| 캐릭터 검색<br>`GET /df/servers/{serverId}/characters` | `CharacterSearchParams` |
| 캐릭터 기본정보<br>`GET /df/servers/{serverId}/characters/{characterId}` | `CharacterBasicParams` |
| 캐릭터 능력치<br>`GET /df/servers/{serverId}/characters/{characterId}/status` | `CharacterStatusParams` |
| 캐릭터 장비<br>`GET /df/servers/{serverId}/characters/{characterId}/equip/equipment` | `CharacterEquipmentParams` |
| 캐릭터 아바타<br>`GET /df/servers/{serverId}/characters/{characterId}/equip/avatar` | `CharacterAvatarParams` |
| 캐릭터 스킬<br>`GET /df/servers/{serverId}/characters/{characterId}/skill/style` | `CharacterSkillParams` |
| 아이템 검색<br>`GET /df/items` | `ItemSearchParams` |
| 아이템 상세<br>`GET /df/items/{itemId}` | `ItemDetailParams` |
| 경매장 검색<br>`GET /df/auction` | `AuctionSearchParams` |
| 경매장 판매내역<br>`GET /df/auction-sold` | `AuctionSoldParams` |
| 타임라인<br>`GET /df/servers/{serverId}/characters/{characterId}/timeline` | `CharacterTimelineParams` |

## 주요 타입

### 공통 타입

- `ApiResponse<T>`: 네오플 API 공통 응답 구조
- `ApiError`: API 에러 응답
- `HttpStatusCode`: HTTP 상태 코드 enum
- `NeopleApiException`: 네오플 API 예외 클래스
- `PaginationParams`: 페이지네이션 파라미터
- `ApiRequestOptions`: API 요청 옵션
- `DateString`: 날짜 문자열 타입 (YYYY-MM-DD)
- `DateTimeString`: 날짜시간 문자열 타입

### 서버 & 게임 타입

- `DFServer`: 던파 서버 목록 ('anton', 'bakal', 'cain', 'casillas', 'diregie', 'hilder', 'prey', 'siroco')
- `CyphersGameType`: 사이퍼즈 게임 타입 ('rating', 'normal')

### 아이템 관련

- `DFItemRarity`: 던파 아이템 희귀도
- `CyphersItemRarity`: 사이퍼즈 아이템 희귀도
- `CyphersTier`: 사이퍼즈 티어 시스템

### 에러 코드 & 상태

- `CommonApiErrorCode`: 공통 API 에러 (API000~API999)
- `DnfErrorCode`: 던파 전용 에러 (DNF000~DNF999)  
- `CyphersErrorCode`: 사이퍼즈 전용 에러 (CY001~CY999)
- `ApiErrorCode`: 모든 API 에러 코드 통합 타입

### 던전앤파이터 주요 타입

#### 캐릭터 관련
- `CharacterSearch`: 캐릭터 검색 결과
- `CharacterBasic`: 캐릭터 기본 정보
- `CharacterStatus`: 캐릭터 능력치 정보
- `CharacterEquipment`: 캐릭터 장비 정보
- `CharacterAvatar`: 캐릭터 아바타 정보
- `CharacterCreature`: 캐릭터 크리처 정보
- `CharacterFlag`: 캐릭터 국기 정보
- `CharacterTalisman`: 캐릭터 탈리스만 정보

#### 스킬 & 버프
- `CharacterSkill`: 캐릭터 스킬 정보
- `CharacterBuff`: 캐릭터 버프 정보
- `SkillStyle`: 스킬 스타일 정보
- `SkillInfo`: 스킬 상세 정보

#### 아이템 & 경매장
- `ItemSearch`: 아이템 검색 결과
- `ItemDetail`: 아이템 상세 정보
- `SetItemInfo`: 세트 아이템 정보
- `MultiItemInfo`: 멀티 아이템 정보
- `AuctionSearch`: 경매장 검색 결과
- `AuctionSold`: 경매장 판매 내역

#### 기타
- `Timeline`: 캐릭터 타임라인 정보

### 사이퍼즈 주요 타입

#### 플레이어 & 랭킹
- `PlayerInfo`: 플레이어 기본 정보
- `PlayerMatches`: 플레이어 매치 기록
- `RankingInfo`: 랭킹 정보
- `PlayerRanking`: 플레이어 랭킹 데이터

#### 매치 관련
- `MatchDetail`: 매치 상세 정보
- `MatchTeam`: 매치 팀 정보
- `MatchPlayer`: 매치 플레이어 정보
- `Position`: 플레이어 위치 정보

#### 아이템 & 장비
- `ItemInfo`: 아이템 기본 정보
- `ItemDetail`: 아이템 상세 정보
- `PlayerEquipment`: 플레이어 장비 정보
- `ItemTuning`: 아이템 튜닝 정보

#### 사이퍼 캐릭터
- `CypherInfo`: 사이퍼 기본 정보
- `CypherDetail`: 사이퍼 상세 정보
- `CypherAbility`: 사이퍼 능력치
- `CypherSkill`: 사이퍼 스킬
- `CypherRecommendItem`: 추천 아이템 정보

#### 클라이언트 인터페이스
- `CyphersApiClient`: 사이퍼즈 API 클라이언트 인터페이스
- `CyphersApiConfig`: API 클라이언트 설정
- `CYPHERS_API_ENDPOINTS`: API 엔드포인트 상수

### 동일한 이름의 타입 구분하기

일부 타입은 던전앤파이터와 사이퍼즈에서 동일한 이름을 사용합니다. 이런 경우 네임스페이스를 통해 구분하여 사용하세요:

#### 네임스페이스를 통한 구분 사용
```typescript
import { DungeonFighter, Cyphers } from 'neople-openapi-types';

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
import { ItemDetail as DFItemDetail } from 'neople-openapi-types/dungeon-fighter';
import { ItemDetail as CyItemDetail } from 'neople-openapi-types/cyphers';

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
│   ├── servers.ts    # 서버 정보
│   ├── enums.ts      # 열거형 타입
│   ├── codes.ts      # HTTP/에러 코드
│   └── errors.ts     # 에러 처리
├── cyphers/          # 사이퍼즈 API 타입
│   ├── api.ts        # API 파라미터 타입
│   ├── client.ts     # 클라이언트 인터페이스
│   ├── character.ts  # 플레이어/매치 타입
│   ├── matches.ts    # 매치 상세 타입
│   ├── item.ts       # 아이템 타입
│   ├── cypher.ts     # 사이퍼 캐릭터 타입
│   └── index.ts
├── dungeon-fighter/  # 던전앤파이터 API 타입
│   ├── api.ts        # API 파라미터 타입
│   ├── character.ts  # 캐릭터 타입
│   ├── skill.ts      # 스킬/버프 타입
│   ├── item.ts       # 아이템 타입
│   ├── auction.ts    # 경매장 타입
│   ├── timeline.ts   # 타임라인 타입
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