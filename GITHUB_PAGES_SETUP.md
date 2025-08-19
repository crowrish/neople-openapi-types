# GitHub Pages로 API 문서 호스팅하기

## 생성된 문서

API Extractor를 통해 다음과 같은 문서가 생성되었습니다:

### 📁 docs/ 폴더
- **index.md**: 메인 API 문서 페이지
- **각 타입별 상세 문서**: 모든 인터페이스, 타입, 함수에 대한 개별 마크다운 파일
- **네임스페이스별 구성**: `dungeonfighter.*`, `cyphers.*` 네임스페이스로 체계적 분류

## GitHub Pages 설정 방법

### 1. GitHub 저장소 설정
1. GitHub에서 `neople-openapi-types` 저장소로 이동
2. **Settings** 탭 클릭
3. 왼쪽 사이드바에서 **Pages** 클릭

### 2. 소스 설정
1. **Source**에서 **Deploy from a branch** 선택
2. **Branch**에서 `main` 브랜치 선택
3. **Folder**에서 `/docs` 선택
4. **Save** 클릭

### 3. 접근 URL
설정 완료 후 다음 URL에서 문서에 접근할 수 있습니다:
```
https://crowrish.github.io/neople-openapi-types/
```

## 문서 구조

```
docs/
├── index.md                                    # 메인 페이지
├── neople-openapi-types.md                     # 패키지 개요
├── neople-openapi-types.dungeonfighter.md      # 던전앤파이터 네임스페이스
├── neople-openapi-types.cyphers.md             # 사이퍼즈 네임스페이스
├── neople-openapi-types.commonapierrorcode.md  # 공통 에러 코드
├── neople-openapi-types.httpstatuscode.md      # HTTP 상태 코드
└── [각 타입별 상세 파일들...]
```

## 자동 업데이트

현재 설정으로 다음과 같이 자동화됩니다:

1. **코드 변경** → `npm run build:docs` → **문서 재생성**
2. **Git 커밋 & 푸시** → **GitHub Pages 자동 배포**

## GitHub Actions 자동화 (선택사항)

더 완전한 자동화를 위해 `.github/workflows/docs.yml` 추가:

```yml
name: Deploy Docs
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm install
      - run: npm run build:docs
      
      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

## 접근 방법

### 1. 브라우저에서 직접 접근
- 메인 페이지: `https://crowrish.github.io/neople-openapi-types/`
- 특정 타입: `https://crowrish.github.io/neople-openapi-types/neople-openapi-types.dungeonfighter.characterbasic.md`

### 2. README.md에 링크 추가
```markdown
## 📖 API 문서
- [온라인 API 문서](https://crowrish.github.io/neople-openapi-types/)
- [GitHub 저장소](https://github.com/crowrish/neople-openapi-types)
```

### 3. 패키지에서 참조
```typescript
/**
 * 자세한 사용법은 다음 문서를 참조하세요:
 * @see https://crowrish.github.io/neople-openapi-types/
 */
```

## 장점

✅ **무료 호스팅**: GitHub Pages는 공개 저장소에서 무료  
✅ **자동 배포**: 코드 변경 시 자동으로 문서 업데이트  
✅ **검색 엔진 최적화**: 마크다운 기반으로 SEO 친화적  
✅ **모바일 지원**: GitHub Pages의 기본 테마는 반응형  
✅ **버전 관리**: Git을 통한 문서 버전 추적 가능  

이제 전 세계 개발자들이 웹 브라우저에서 손쉽게 API 문서를 확인할 수 있습니다!