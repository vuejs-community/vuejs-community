import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-jsx',
  description: 'Converts JSX files to modules',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'jsx',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/edoardocavazza/rollup-plugin-external-jsx',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-jsx',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 6,
    },
  },
})
