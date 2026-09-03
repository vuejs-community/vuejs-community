import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fork',
  description: 'A rollup plugin that spawns rollup, emitting the output back into the main bundle.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'fork',
    'spawn',
    'worker',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ianpurvis/rollup-plugin-fork',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fork',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 7,
    },
  },
})
