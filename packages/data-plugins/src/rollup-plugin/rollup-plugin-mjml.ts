import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mjml',
  description: 'Compile MJML templates with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'mjml',
  ],
  source: {
    npm: 'rollup-plugin-mjml',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-mjml',
    website: 'https://github.com/daankauwenberg/rollup-plugin-mjml',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 143,
      weekly: 21,
    },
  },
})
