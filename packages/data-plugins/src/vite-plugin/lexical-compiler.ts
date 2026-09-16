import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lexical/compiler',
  description: 'Build-time compiler for Lexical: tree-shaking annotations and inlining for the side-effect-free factories',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lexical',
    'editor',
    'compiler',
    'vite-plugin',
    'rollup-plugin',
    'tree-shaking',
  ],
  source: {
    github: 'facebook/lexical',
    npm: '@lexical/compiler',
  },
  links: {
    github: 'https://github.com/facebook/lexical',
    npm: 'https://www.npmjs.com/package/@lexical/compiler',
    website: 'https://lexical.dev/docs/packages/lexical-compiler',
  },
  stats: {
    stars: 23859,
    downloads: {
      monthly: 1106,
      weekly: 503,
    },
  },
})
