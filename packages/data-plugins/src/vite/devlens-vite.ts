import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@devlens/vite',
  description: 'Vite plugin for DevLens — embedded dashboard at /__devlens/',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'devlens',
    'vite-plugin',
    'devtools',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crashsense/devlens',
    npm: 'https://www.npmjs.com/package/@devlens/vite',
  },
  stats: {
    downloads: {
      monthly: 54,
      weekly: 23,
    },
  },
})
