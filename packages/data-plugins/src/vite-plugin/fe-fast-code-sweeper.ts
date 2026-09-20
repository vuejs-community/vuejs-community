import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fe-fast/code-sweeper',
  description: 'A lightweight JavaScript/TypeScript code cleaning tool',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'javascript',
    'code-cleanup',
    'ast',
    'linter',
    'unused-code',
    'code-analysis',
    'webpack-plugin',
    'vite-plugin',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/william-xue/code-sweeper',
    npm: 'https://www.npmjs.com/package/@fe-fast/code-sweeper',
    website: 'https://github.com/william-xue/code-sweeper#readme',
  },
  source: {
    github: 'william-xue/code-sweeper',
    npm: '@fe-fast/code-sweeper',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
