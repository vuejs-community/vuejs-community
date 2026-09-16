import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eta',
  description: 'Eta loader plugin for rollup.js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'eta',
    'template',
  ],
  source: {
    github: 'stateful/rollup-plugin-eta',
    npm: 'rollup-plugin-eta',
  },
  links: {
    github: 'https://github.com/stateful/rollup-plugin-eta',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eta',
    website: 'https://github.com/stateful/rollup-plugin-eta',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 67,
      weekly: 14,
    },
  },
})
