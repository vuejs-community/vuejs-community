import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aurynx/vite-plugin',
  description: 'A Vite plugin to compile Aurynx template syntax into native, high-performance PHP.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'template',
    'aurynx',
    'ssr',
  ],
  links: {
    github: 'https://github.com/aurynx/vite-plugin',
    npm: 'https://www.npmjs.com/package/@aurynx/vite-plugin',
    website: 'https://github.com/aurynx/vite-plugin#readme',
  },
  source: {
    github: 'aurynx/vite-plugin',
    npm: '@aurynx/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 56,
      weekly: 7,
    },
  },
})
