import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kanjianmusic/vite-plugin-third-party-injector',
  description: 'Vite plugin for injecting third-party scripts into HTML files, such as gtag, gtm, etc.',
  version: '8.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'analytics',
    'gtag',
    'gtm',
    'clarity',
    'facebook-pixel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/SeeMusic/vite-plugin-third-party-injector',
    npm: 'https://www.npmjs.com/package/@kanjianmusic/vite-plugin-third-party-injector',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 8,
    },
  },
})
