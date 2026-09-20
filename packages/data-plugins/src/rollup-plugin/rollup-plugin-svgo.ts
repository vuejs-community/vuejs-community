import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svgo',
  description: 'Import & clean svg files and export their content as strings',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'svg',
    'svgo',
  ],
  links: {
    github: 'https://github.com/porsager/rollup-plugin-svgo',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svgo',
    website: 'https://github.com/porsager/rollup-plugin-svgo#readme',
  },
  source: {
    github: 'porsager/rollup-plugin-svgo',
    npm: 'rollup-plugin-svgo',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 11599,
      weekly: 2022,
    },
  },
})
