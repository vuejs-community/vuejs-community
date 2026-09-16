import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-legacy-bundle',
  description: 'Rollup plugin to generate legacy bundle for old browsers',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'modern bundle',
    'legacy bundle',
  ],
  source: {
    npm: 'rollup-plugin-legacy-bundle',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-legacy-bundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 6,
    },
  },
})
