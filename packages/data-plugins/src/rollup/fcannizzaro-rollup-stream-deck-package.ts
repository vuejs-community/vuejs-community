import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fcannizzaro/rollup-stream-deck-package',
  description: 'Rollup plugin to create a distribution package for Elgato Stream Deck plguins',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'elgato',
    'stream-deck',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/fcannizzaro/rollup-stream-deck-package',
    npm: 'https://www.npmjs.com/package/@fcannizzaro/rollup-stream-deck-package',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
