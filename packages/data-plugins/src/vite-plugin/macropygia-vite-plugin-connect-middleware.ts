import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-connect-middleware',
  description: 'Vite plugin to configure middleware for dev and preview servers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'connect',
    'middleware',
  ],
  source: {
    github: 'macropygia/static-site-stack',
    npm: '@macropygia/vite-plugin-connect-middleware',
  },
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-connect-middleware',
    website: 'https://github.com/macropygia/static-site-stack/tree/main/packages/vite-plugin-connect-middleware#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
