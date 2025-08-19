---
layout: default
title: "neople-openapi-types"
description: "네오플 Open API를 위한 포괄적인 TypeScript 타입 정의 라이브러리"
---

# neople-openapi-types

네오플 Open API를 위한 포괄적인 TypeScript 타입 정의 라이브러리입니다.

## 빠른 시작

### 설치

```bash
npm install -D neople-openapi-types
```

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

## 지원 게임

- **던전앤파이터 (Dungeon Fighter Online)** - 34개 API 엔드포인트
- **사이퍼즈 (Cyphers)** - 11개 API 엔드포인트

## API 참조

### 📖 완전한 타입 정의
- [전체 API 타입 정의](neople-openapi-types) - 자동 생성된 상세 문서
- [던전앤파이터 네임스페이스](neople-openapi-types.dungeonfighter) - DF 전용 타입들
- [사이퍼즈 네임스페이스](neople-openapi-types.cyphers) - 사이퍼즈 전용 타입들

### 🔧 주요 타입
- [ApiResponse](neople-openapi-types.apiresponse) - 모든 API의 표준 응답 구조
- [HttpStatusCode](neople-openapi-types.httpstatuscode) - HTTP 상태 코드
- [NeopleApiException](neople-openapi-types.neopleapiexception) - API 예외 처리

### 🎮 게임별 타입
- [DFServer](neople-openapi-types.dfserver) - 던전앤파이터 서버 목록
- [CyphersGameType](neople-openapi-types.cyphersgametype) - 사이퍼즈 게임 타입

## 사용 예시

### 사이퍼즈 플레이어 검색

```typescript
import type { 
  PlayerSearchParams, 
  PlayerSearchResponse 
} from 'neople-openapi-types';

const searchParams: PlayerSearchParams = {
  nickname: '플레이어명',
  wordType: 'match',
  limit: 50
};

// 실제 API 호출 (fetch, axios 등 사용)
const response = await fetch(
  `/cy/players?nickname=${searchParams.nickname}&limit=${searchParams.limit}`,
  { headers: { 'apikey': process.env.NEOPLE_OPENAPI_CYPHERS_KEY } }
);
const results: PlayerSearchResponse = await response.json();
```

### 던전앤파이터 캐릭터 조회

```typescript
import type { 
  CharacterSearchParams,
  CharacterEquipmentParams 
} from 'neople-openapi-types';

const searchParams: CharacterSearchParams = {
  serverId: 'anton',
  characterName: '캐릭터명',
  wordType: 'match',
  limit: 10
};

const equipParams: CharacterEquipmentParams = {
  serverId: 'anton',
  characterId: 'characterId123'
};
```

## 링크

- **[GitHub 저장소](https://github.com/crowrish/neople-openapi-types)** - 소스 코드 및 이슈
- **[npm 패키지](https://www.npmjs.com/package/neople-openapi-types)** - 설치 및 버전 정보
- **[네오플 개발자센터](https://developers.neople.co.kr/)** - 공식 API 문서

---

이 라이브러리는 네오플 Open API의 **비공식** TypeScript 타입 정의입니다.  
네오플 Open API 서비스 이용 시 [이용약관](https://developers.neople.co.kr/contents/policy)을 반드시 준수해야 합니다.