import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devlens/vite',
  description: 'Vite plugin for DevLens — embedded dashboard at /__devlens/',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devlens',
    'vite-plugin',
    'devtools',
    'debug',
  ],
  source: {
    github: 'crashsense/devlens',
    npm: '@devlens/vite',
  },
  links: {
    github: 'https://github.com/crashsense/devlens',
    npm: 'https://www.npmjs.com/package/@devlens/vite',
    website: 'https://github.com/crashsense/devlens#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 86,
      weekly: 43,
    },
  },
})
