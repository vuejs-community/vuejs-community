import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@swissquote/rollup-plugin-eslint',
  description: 'Verify entry point and all imported files with ESLint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'eslint',
    'lint',
  ],
  source: {
    github: 'swissquote/crafty',
    npm: '@swissquote/rollup-plugin-eslint',
  },
  links: {
    github: 'https://github.com/swissquote/crafty',
    npm: 'https://www.npmjs.com/package/@swissquote/rollup-plugin-eslint',
    website: 'https://github.com/swissquote/crafty#readme',
  },
  stats: {
    stars: 31,
    downloads: {
      monthly: 137,
      weekly: 8,
    },
  },
})
