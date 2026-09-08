import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-legacy-bundle',
  description: 'Rollup plugin to generate legacy bundle for old browsers',
  icon: 'logos:rollupjs',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'modern bundle',
    'legacy bundle',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-legacy-bundle',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-legacy-bundle',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
