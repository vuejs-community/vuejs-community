import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ops',
  description: 'Vite plugin to organize build outputs and vendor chunking.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rollup',
    'chunks',
    'vendor',
    'build',
  ],
  links: {
    github: 'https://github.com/suileyan/vite-plugin-ops',
    npm: 'https://www.npmjs.com/package/vite-plugin-ops',
    website: 'https://github.com/suileyan/vite-plugin-ops#readme',
  },
  source: {
    github: 'suileyan/vite-plugin-ops',
    npm: 'vite-plugin-ops',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 27,
      weekly: 3,
    },
  },
})
