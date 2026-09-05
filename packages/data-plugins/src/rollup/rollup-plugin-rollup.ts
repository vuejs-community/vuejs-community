import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rollup',
  description: 'Inline rollup bundles for Web Workers and such.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/meh/rollup-plugin-svg-store',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rollup',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
