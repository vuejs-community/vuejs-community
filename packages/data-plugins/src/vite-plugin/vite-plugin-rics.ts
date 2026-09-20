import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rics',
  description: 'Vite plugin for rics CSS preprocessor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rics',
    'scss',
    'css',
    'preprocessor',
  ],
  links: {
    github: 'https://github.com/better-lyrics/rics',
    npm: 'https://www.npmjs.com/package/vite-plugin-rics',
    website: 'https://rics.boidu.dev',
  },
  source: {
    github: 'better-lyrics/rics',
    npm: 'vite-plugin-rics',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 246,
      weekly: 16,
    },
  },
})
