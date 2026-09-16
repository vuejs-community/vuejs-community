import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@halo-dev/vite-plugin-halo-theme',
  description: 'A Vite plugin for Halo theme that provides HTML template pre-compilation and multi-page entry support.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'halo',
    'halo-theme',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'halo-sigs/vite-plugin-halo-theme',
    npm: '@halo-dev/vite-plugin-halo-theme',
  },
  links: {
    github: 'https://github.com/halo-sigs/vite-plugin-halo-theme',
    npm: 'https://www.npmjs.com/package/@halo-dev/vite-plugin-halo-theme',
    website: 'https://github.com/halo-sigs/vite-plugin-halo-theme#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 233,
      weekly: 34,
    },
  },
})
