import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@brixtol/rollup-config',
  description: 'Shared Rollup configuration interface used within the Brixtol Textiles monorepo.',
  version: '1.5.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'config',
    'brixtol',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/brixtol/rollup-config',
    npm: 'https://www.npmjs.com/package/@brixtol/rollup-config',
  },
  stats: {
    downloads: {
      monthly: 74,
      weekly: 17,
    },
  },
})
