import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inspector-agent/vite-plugin',
  description: '.vue 템플릿 요소에 data-ia-src(파일:라인:컬럼)를 주입해 DOM 노드를 소스 라인에 연결하는 Vite 플러그인',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'nuxt',
    'source-map',
    'data-attribute',
    'devtools',
  ],
  links: {
    github: 'https://github.com/HamHyunJun/Inspector-Agent',
    npm: 'https://www.npmjs.com/package/@inspector-agent/vite-plugin',
    website: 'https://github.com/HamHyunJun/Inspector-Agent/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'HamHyunJun/Inspector-Agent',
    npm: '@inspector-agent/vite-plugin',
  },
})
