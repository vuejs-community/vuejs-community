import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate',
  description: 'Generate files on the fly with Rollup.',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 3,
    },
  },
})
