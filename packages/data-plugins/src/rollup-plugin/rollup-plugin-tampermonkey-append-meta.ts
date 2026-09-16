import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tampermonkey-append-meta',
  description: 'append meta to user script of tampermonkey.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'tampermonkey',
  ],
  source: {
    npm: 'rollup-plugin-tampermonkey-append-meta',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-tampermonkey-append-meta',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
