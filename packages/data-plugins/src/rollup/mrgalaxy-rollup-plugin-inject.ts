import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mrgalaxy/rollup-plugin-inject',
  description: 'Scan modules for global variables and inject `import` statements where necessary',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-inject',
    npm: 'https://www.npmjs.com/package/@mrgalaxy/rollup-plugin-inject',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 10,
    },
  },
})
