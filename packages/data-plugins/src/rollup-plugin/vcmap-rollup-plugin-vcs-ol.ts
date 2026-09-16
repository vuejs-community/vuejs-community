import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vcmap/rollup-plugin-vcs-ol',
  description: 'Converters all ol module imports to dump file imports',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vcmap',
  ],
  source: {
    npm: '@vcmap/rollup-plugin-vcs-ol',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@vcmap/rollup-plugin-vcs-ol',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 282,
      weekly: 70,
    },
  },
})
