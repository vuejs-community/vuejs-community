import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uiwwsw/hangulscript',
  description: '한글 문장으로 쓴 .hgs 소스를 TypeScript로 변환하고 TypeScript 컴파일러로 검사해 JavaScript와 .d.ts를 만드는 실험적 변환기와 CLI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hangul',
    'korean',
    'hgs',
    'korean-programming-language',
    'transpiler',
    'typescript',
    'compiler',
    'cli',
    'vite-plugin',
    'dts',
  ],
  links: {
    github: 'https://github.com/uiwwsw/hangulscript',
    npm: 'https://www.npmjs.com/package/@uiwwsw/hangulscript',
    website: 'https://github.com/uiwwsw/hangulscript#readme',
  },
  source: {
    github: 'uiwwsw/hangulscript',
    npm: '@uiwwsw/hangulscript',
  },
})
