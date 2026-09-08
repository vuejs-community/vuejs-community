import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-no-emit',
  description: 'A Rollup plugin that skips emit for generated bundles.',
  icon: 'logos:rollupjs',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'no-emit',
    'exclude',
    'ignore',
    'skip',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Arnesfield/rollup-plugin-no-emit',
    npm: 'rollup-plugin-no-emit',
  },
  links: {
    github: 'https://github.com/Arnesfield/rollup-plugin-no-emit',
    npm: 'https://www.npmjs.com/package/rollup-plugin-no-emit',
  },
  stats: {
    downloads: {
      monthly: 6971,
      weekly: 873,
    },
  },
})
