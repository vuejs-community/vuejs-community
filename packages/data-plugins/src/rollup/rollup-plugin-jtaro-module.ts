import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jtaro-module',
  description: 'A Rollup plugin for JTaro Module.',
  icon: 'logos:rollupjs',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'jtaro-module',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'chjtx/rollup-plugin-jtaro-module',
    npm: 'rollup-plugin-jtaro-module',
  },
  links: {
    github: 'https://github.com/chjtx/rollup-plugin-jtaro-module',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jtaro-module',
  },
  stats: {
    downloads: {
      monthly: 68,
      weekly: 9,
    },
  },
})
