import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-codefilter',
  description: 'A plugin for rollup/vite to filter code by dotenv variables',
  version: '1.0.0-beta',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cary-mao/rollup-plugin-codefilter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-codefilter',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 10,
    },
  },
})
