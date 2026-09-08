import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-content',
  description: 'Rollup plugin to generate content and its summaries for i18n static sites',
  icon: 'logos:rollupjs',
  version: '0.8.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'rollup',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'stalniy/rollup-plugin-content',
    npm: 'rollup-plugin-content',
  },
  links: {
    github: 'https://github.com/stalniy/rollup-plugin-content',
    npm: 'https://www.npmjs.com/package/rollup-plugin-content',
  },
  stats: {
    downloads: {
      monthly: 303,
      weekly: 9,
    },
  },
})
