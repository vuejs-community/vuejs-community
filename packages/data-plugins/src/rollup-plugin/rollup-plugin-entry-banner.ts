import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entry-banner',
  description: 'A simple rollup plugin to prepend content to entry chunk',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollupjs',
    'rollup-plugin',
    'banner-entry',
    'banner',
    'chunk',
  ],
  links: {
    github: 'https://github.com/jackluson/rollup-plugin-entry-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-entry-banner',
    website: 'https://github.com/jackluson/rollup-plugin-entry-banner',
  },
  source: {
    github: 'jackluson/rollup-plugin-entry-banner',
    npm: 'rollup-plugin-entry-banner',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
