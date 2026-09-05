import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svgo',
  description: 'Import & clean svg files and export their content as strings',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'svg',
    'svgo',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/porsager/rollup-plugin-svgo',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svgo',
  },
  stats: {
    downloads: {
      monthly: 13861,
      weekly: 3178,
    },
  },
})
