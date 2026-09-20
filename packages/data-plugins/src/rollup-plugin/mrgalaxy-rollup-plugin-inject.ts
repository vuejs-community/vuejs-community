import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mrgalaxy/rollup-plugin-inject',
  description: 'Scan modules for global variables and inject `import` statements where necessary',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-inject',
    npm: 'https://www.npmjs.com/package/@mrgalaxy/rollup-plugin-inject',
    website: 'https://github.com/rollup/rollup-plugin-inject#readme',
  },
  source: {
    github: 'rollup/rollup-plugin-inject',
    npm: '@mrgalaxy/rollup-plugin-inject',
  },
  stats: {
    stars: 77,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
