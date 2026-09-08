import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mjml-inline',
  description: 'Compile MJML templates with Rollup and automatically inline them in your bundle',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite-plugin',
    'mjml',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-mjml-inline',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mjml-inline',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
