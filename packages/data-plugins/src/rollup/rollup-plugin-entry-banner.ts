import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entry-banner',
  description: 'A simple rollup plugin to prepend content to entry chunk',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollupjs',
    'rollup-plugin',
    'banner-entry',
    'banner',
    'chunk',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jackluson/rollup-plugin-entry-banner',
    npm: 'rollup-plugin-entry-banner',
  },
  links: {
    github: 'https://github.com/jackluson/rollup-plugin-entry-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-entry-banner',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
