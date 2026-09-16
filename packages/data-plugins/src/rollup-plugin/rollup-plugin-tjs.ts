import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tjs',
  description: 'tabscript plugin for rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    npm: 'rollup-plugin-tjs',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-tjs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
