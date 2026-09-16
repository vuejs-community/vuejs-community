import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jtaro-module',
  description: 'A Rollup plugin for JTaro Module.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'jtaro-module',
    'rollup-plugin',
  ],
  source: {
    github: 'chjtx/rollup-plugin-jtaro-module',
    npm: 'rollup-plugin-jtaro-module',
  },
  links: {
    github: 'https://github.com/chjtx/rollup-plugin-jtaro-module',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jtaro-module',
    website: 'https://github.com/chjtx/rollup-plugin-jtaro-module#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 13,
    },
  },
})
