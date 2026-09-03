import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lexical/compiler',
  description: 'Build-time compiler for Lexical: tree-shaking annotations and inlining for the side-effect-free factories',
  version: '0.50.0',
  category: 'plugin',
  tags: [
    'lexical',
    'editor',
    'compiler',
    'vite-plugin',
    'rollup-plugin',
    'tree-shaking',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/facebook/lexical',
    npm: 'https://www.npmjs.com/package/@lexical/compiler',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
