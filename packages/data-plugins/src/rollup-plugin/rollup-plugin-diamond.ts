import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-diamond',
  description: 'Plugin to run diamond compiler as part of rollup build',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'diamond',
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/martypdx/rollup-plugin-diamond',
    npm: 'https://www.npmjs.com/package/rollup-plugin-diamond',
    website: 'https://github.com/martypdx/rollup-plugin-diamond#readme',
  },
  source: {
    github: 'martypdx/rollup-plugin-diamond',
    npm: 'rollup-plugin-diamond',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
