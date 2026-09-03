import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@elvel/vite',
  description: 'The Vite plugin for Elvel — hot file, server-side reload, build output and asset URLs',
  version: '1.0.0-alpha.25',
  category: 'plugin',
  tags: [
    'bun',
    'elvel',
    'hmr',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ufhy/elvel',
    npm: 'https://www.npmjs.com/package/@elvel/vite',
  },
  stats: {
    downloads: {
      monthly: 732,
      weekly: 732,
    },
  },
})
