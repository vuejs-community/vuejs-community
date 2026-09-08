import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ops',
  description: 'Vite plugin to organize build outputs and vendor chunking.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'suileyan/vite-plugin-ops',
    npm: 'vite-plugin-ops',
  },
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
