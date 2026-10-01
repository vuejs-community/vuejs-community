import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@codeflowlens/node',
  description: 'CodeFlowLens Node 추적기 — 코드 수정 0으로 함수 호출 흐름을 기록 (모듈 로드 시점 메모리 계측)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tracing',
    'monitoring',
    'call-graph',
    'observability',
    'vite-plugin',
    'vibe-coding',
  ],
  links: {
    github: 'https://github.com/exceedlimit/codeflowlens',
    npm: 'https://www.npmjs.com/package/@codeflowlens/node',
    website: 'https://github.com/exceedlimit/codeflowlens#readme',
  },
  source: {
    github: 'exceedlimit/codeflowlens',
    npm: '@codeflowlens/node',
  },
})
