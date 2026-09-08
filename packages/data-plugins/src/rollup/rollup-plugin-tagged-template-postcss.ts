import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tagged-template-postcss',
  description: 'Process contents of tagged template literals with PostCSS during Rollup build.',
  icon: 'logos:rollupjs',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mvromer/rollup-plugin-tagged-template-postcss',
    npm: 'rollup-plugin-tagged-template-postcss',
  },
  links: {
    github: 'https://github.com/mvromer/rollup-plugin-tagged-template-postcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tagged-template-postcss',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 7,
    },
  },
})
