import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fork',
  description: 'A rollup plugin that spawns rollup, emitting the output back into the main bundle.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'ianpurvis/rollup-plugin-fork',
    npm: 'rollup-plugin-fork',
  },
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
