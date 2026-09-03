import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ai-operable/scanner',
  description: '构建时 AST 扫描：从 data-ai-* 标注提取能力清单（manifest）',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'ai',
    'ai-native',
    'llm',
    'agent',
    'ast',
    'vite-plugin',
    'scanner',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/FantasticPerson/ai-native-framework',
    npm: 'https://www.npmjs.com/package/@ai-operable/scanner',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
