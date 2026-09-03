import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fe-fast/code-sweeper',
  description: 'A lightweight JavaScript/TypeScript code cleaning tool',
  version: '1.0.1',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/william-xue/code-sweeper',
    npm: 'https://www.npmjs.com/package/@fe-fast/code-sweeper',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 11,
    },
  },
})
