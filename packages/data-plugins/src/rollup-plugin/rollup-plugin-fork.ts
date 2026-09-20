import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fork',
  description: 'A rollup plugin that spawns rollup, emitting the output back into the main bundle.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'fork',
    'spawn',
    'worker',
  ],
  links: {
    github: 'https://github.com/ianpurvis/rollup-plugin-fork',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fork',
    website: 'https://github.com/ianpurvis/rollup-plugin-fork#readme',
  },
  source: {
    github: 'ianpurvis/rollup-plugin-fork',
    npm: 'rollup-plugin-fork',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
