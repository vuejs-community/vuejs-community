import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fcannizzaro/rollup-stream-deck-package',
  description: 'Rollup plugin to create a distribution package for Elgato Stream Deck plguins',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'elgato',
    'stream-deck',
  ],
  source: {
    github: 'fcannizzaro/rollup-stream-deck-package',
    npm: '@fcannizzaro/rollup-stream-deck-package',
  },
  links: {
    github: 'https://github.com/fcannizzaro/rollup-stream-deck-package',
    npm: 'https://www.npmjs.com/package/@fcannizzaro/rollup-stream-deck-package',
    website: 'https://github.com/fcannizzaro/rollup-stream-deck-package#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
