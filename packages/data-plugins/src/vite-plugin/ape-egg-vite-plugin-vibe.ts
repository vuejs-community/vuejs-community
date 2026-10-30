import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ape-egg/vite-plugin-vibe',
  description: 'Vite plugin for Vibe — component HMR, raw HTML serving, and an opt-in component preview',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vibe',
    'hmr',
    'components',
    'preview',
    'gallery',
  ],
  links: {
    github: 'https://github.com/kkortes/ape-egg',
    npm: 'https://www.npmjs.com/package/@ape-egg/vite-plugin-vibe',
    website: 'https://vibe.korte.kim',
  },
  source: {
    github: 'kkortes/ape-egg',
    npm: '@ape-egg/vite-plugin-vibe',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1681,
      weekly: 269,
    },
  },
})
