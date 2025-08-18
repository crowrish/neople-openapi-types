module.exports = {
  // 기본 포맷팅 설정
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  
  // TypeScript 관련 설정
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  
  // 파일별 설정
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 100,
        proseWrap: 'preserve',
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },
  ],
};