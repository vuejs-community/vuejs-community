import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mjml-inline',
  description: 'Compile MJML templates with Rollup and automatically inline them in your bundle',
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
