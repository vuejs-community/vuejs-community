import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pioug/rollup-plugin-css-only',
  description: 'Rollup plugin that bundles imported css',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'css',
  ],
  links: {
    github: 'https://github.com/thgh/rollup-plugin-css-only',
    npm: 'https://www.npmjs.com/package/@pioug/rollup-plugin-css-only',
    website: 'https://github.com/thgh/rollup-plugin-css-only',
  },
  source: {
    github: 'thgh/rollup-plugin-css-only',
    npm: '@pioug/rollup-plugin-css-only',
  },
  stats: {
    stars: 118,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
