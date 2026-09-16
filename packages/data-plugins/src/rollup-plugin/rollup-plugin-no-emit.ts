import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-no-emit',
  description: 'A Rollup plugin that skips emit for generated bundles.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'no-emit',
    'exclude',
    'ignore',
    'skip',
  ],
  source: {
    github: 'Arnesfield/rollup-plugin-no-emit',
    npm: 'rollup-plugin-no-emit',
  },
  links: {
    github: 'https://github.com/Arnesfield/rollup-plugin-no-emit',
    npm: 'https://www.npmjs.com/package/rollup-plugin-no-emit',
    website: 'https://github.com/Arnesfield/rollup-plugin-no-emit#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 6992,
      weekly: 1587,
    },
  },
})
