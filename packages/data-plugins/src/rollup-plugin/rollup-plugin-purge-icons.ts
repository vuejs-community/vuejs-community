import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-purge-icons',
  description: 'Rollup plugin for PurgeIcons',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'purge-icons',
  ],
  source: {
    github: 'antfu/purge-icons',
    npm: 'rollup-plugin-purge-icons',
  },
  links: {
    github: 'https://github.com/antfu/purge-icons',
    npm: 'https://www.npmjs.com/package/rollup-plugin-purge-icons',
    website: 'https://github.com/antfu/purge-icons/tree/master/packages/rollup-plugin-purge-icons#readme',
  },
  stats: {
    stars: 233,
    downloads: {
      monthly: 61591,
      weekly: 11053,
    },
  },
})
