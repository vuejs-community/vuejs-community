import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zenso/vite-plugin',
  description: 'Vite plugin for Zenso e-ink plugins: Liquid dev render, manifest/build emit, plugin.zip pack',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'liquid',
    'zenso',
    'e-ink',
  ],
  source: {
    github: 'zensoink/vite-plugin',
    npm: '@zenso/vite-plugin',
  },
  links: {
    github: 'https://github.com/zensoink/vite-plugin',
    npm: 'https://www.npmjs.com/package/@zenso/vite-plugin',
    website: 'https://github.com/zensoink/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
