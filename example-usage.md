# API Extractor 활용 예시

## 1. 단일 통합 파일 사용
```typescript
// 기존: 여러 파일에서 import
import { DungeonFighter } from 'neople-openapi-types/dist/dungeon-fighter';
import { Cyphers } from 'neople-openapi-types/dist/cyphers';

// 새로운 방식: 통합 파일에서 import
import { DungeonFighter, Cyphers } from 'neople-openapi-types/dist/neople-openapi-types';
```

## 2. API 변경사항 추적
버전 업데이트 시 `api-reports/neople-openapi-types.api.md`에서:
- 추가된 타입 확인
- 제거된 타입 확인  
- 변경된 인터페이스 확인
- Breaking changes 자동 감지

## 3. 문서 생성 도구 연동
```json
// temp/neople-openapi-types.api.json
// 이 파일을 Microsoft API Documenter나 다른 도구와 연동 가능
```

## 4. CI/CD 파이프라인에서 활용
```yml
# GitHub Actions에서
- name: API 호환성 검증
  run: npm run api-extract
  # API 변경사항이 있으면 자동으로 PR에 코멘트
```

## 5. 배포 시 자동 검증
```bash
npm publish
# prepublishOnly에서 자동으로:
# 1. TypeScript 컴파일 검증
# 2. ESLint 검증  
# 3. API Extractor 실행
# 4. API 호환성 검증
# 모든 검증 통과 후에만 배포
```