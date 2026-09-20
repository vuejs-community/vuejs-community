import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nola-lang/rollup',
  description: 'Rollup plugin for Nola (.tsi)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'nola',
    'rollup',
    'rollup-plugin',
    'llm',
    'ai',
  ],
  links: {
    github: 'https://github.com/nola-lang/nola',
    npm: 'https://www.npmjs.com/package/@nola-lang/rollup',
    website: 'https://github.com/nola-lang/nola#readme',
  },
  source: {
    github: 'nola-lang/nola',
    npm: '@nola-lang/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1084,
      weekly: 476,
    },
  },
})
