import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@elvel/vite',
  description: 'The Vite plugin for Elvel — hot file, server-side reload, build output and asset URLs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'elvel',
    'hmr',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ufhy/elvel',
    npm: 'https://www.npmjs.com/package/@elvel/vite',
    website: 'https://github.com/ufhy/elvel#readme',
  },
  source: {
    github: 'ufhy/elvel',
    npm: '@elvel/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1611,
      weekly: 228,
    },
  },
})
