import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-pug-static',
  description: 'Vite plugin to serve multiple Pug as HTML with middleware and build to static HTML.',
  version: '0.0.20',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'pug',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-pug-static',
  },
  stats: {
    downloads: {
      monthly: 120,
      weekly: 25,
    },
  },
})
