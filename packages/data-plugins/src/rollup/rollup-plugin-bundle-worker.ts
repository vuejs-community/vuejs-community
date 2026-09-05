import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-worker',
  description: 'Bundles Worker code alongside your main code',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'webworker',
    'worker',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/andyearnshaw/rollup-plugin-bundle-worker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-worker',
  },
  stats: {
    downloads: {
      monthly: 79,
      weekly: 28,
    },
  },
})
