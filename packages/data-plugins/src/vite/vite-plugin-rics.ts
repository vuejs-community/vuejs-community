import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rics',
  description: 'Vite plugin for rics CSS preprocessor',
  icon: 'logos:vite-icon',
  version: '0.3.22',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rics',
    'scss',
    'css',
    'preprocessor',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'better-lyrics/rics',
    npm: 'vite-plugin-rics',
  },
  links: {
    github: 'https://github.com/better-lyrics/rics',
    npm: 'https://www.npmjs.com/package/vite-plugin-rics',
  },
  stats: {
    downloads: {
      monthly: 261,
      weekly: 200,
    },
  },
})
