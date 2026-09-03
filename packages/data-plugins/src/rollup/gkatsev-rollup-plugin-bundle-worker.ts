import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gkatsev/rollup-plugin-bundle-worker',
  description: 'Bundles Worker code alongside your main code',
  version: '1.0.2',
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
    npm: 'https://www.npmjs.com/package/@gkatsev/rollup-plugin-bundle-worker',
  },
  stats: {
    downloads: {
      monthly: 193,
      weekly: 44,
    },
  },
})
