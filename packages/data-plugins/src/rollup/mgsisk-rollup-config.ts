import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mgsisk/rollup-config',
  description: 'Opinionated configuration for Rollup.',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-config',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mgsisk/rollup-config',
    npm: 'https://www.npmjs.com/package/@mgsisk/rollup-config',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
