import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rehype',
  description: 'Rollup plugin for processing HTML files using Rehype',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rehype',
    'unified',
    'html',
  ],
  source: {
    github: 'keplersj/rollup-plugin-rehype',
    npm: 'rollup-plugin-rehype',
  },
  links: {
    github: 'https://github.com/keplersj/rollup-plugin-rehype',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rehype',
    website: 'https://github.com/keplersj/rollup-plugin-rehype#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
