import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@flemist/rollup-plugin-import-assets',
  description: 'Rollup plugin to import assets',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'assets',
  ],
  source: {
    github: 'domingues/rollup-plugin-import-assets',
    npm: '@flemist/rollup-plugin-import-assets',
  },
  links: {
    github: 'https://github.com/domingues/rollup-plugin-import-assets',
    npm: 'https://www.npmjs.com/package/@flemist/rollup-plugin-import-assets',
    website: 'https://github.com/domingues/rollup-plugin-import-assets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
