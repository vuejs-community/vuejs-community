import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ai-operable/scanner',
  description: '构建时 AST 扫描：从 data-ai-* 标注提取能力清单（manifest）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ai',
    'ai-native',
    'llm',
    'agent',
    'ast',
    'vite-plugin',
    'scanner',
  ],
  source: {
    github: 'FantasticPerson/ai-native-framework',
    npm: '@ai-operable/scanner',
  },
  links: {
    github: 'https://github.com/FantasticPerson/ai-native-framework',
    npm: 'https://www.npmjs.com/package/@ai-operable/scanner',
    website: 'https://github.com/FantasticPerson/ai-native-framework#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
