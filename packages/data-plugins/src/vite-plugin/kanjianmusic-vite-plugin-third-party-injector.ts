import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kanjianmusic/vite-plugin-third-party-injector',
  description: 'Vite plugin for injecting third-party scripts into HTML files, such as gtag, gtm, etc.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'analytics',
    'gtag',
    'gtm',
    'clarity',
    'facebook-pixel',
  ],
  links: {
    github: 'https://github.com/SeeMusic/vite-plugin-third-party-injector',
    npm: 'https://www.npmjs.com/package/@kanjianmusic/vite-plugin-third-party-injector',
    website: 'https://github.com/SeeMusic/vite-plugin-third-party-injector',
  },
  source: {
    github: 'SeeMusic/vite-plugin-third-party-injector',
    npm: '@kanjianmusic/vite-plugin-third-party-injector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
