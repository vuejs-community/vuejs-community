import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ops',
  description: 'Vite plugin to organize build outputs and vendor chunking.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rollup',
    'chunks',
    'vendor',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/suileyan/vite-plugin-ops',
    npm: 'https://www.npmjs.com/package/vite-plugin-ops',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
