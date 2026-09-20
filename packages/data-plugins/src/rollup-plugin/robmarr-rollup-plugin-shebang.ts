import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@robmarr/rollup-plugin-shebang',
  description: 'Rollup plugin to preserve or append a shebang on an output',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'shebang',
    'cli',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@robmarr/rollup-plugin-shebang',
    website: 'https://bitbucket.org/robmarr/rollup-plugin-shebang#readme',
  },
  source: {
    npm: '@robmarr/rollup-plugin-shebang',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 3,
    },
  },
})
