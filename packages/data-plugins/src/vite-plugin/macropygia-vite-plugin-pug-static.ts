import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-pug-static',
  description: 'Vite plugin to serve multiple Pug as HTML with middleware and build to static HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'pug',
  ],
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-pug-static',
    website: 'https://github.com/macropygia/static-site-stack/tree/main/packages/vite-plugin-pug-static#readme',
  },
  source: {
    github: 'macropygia/static-site-stack',
    npm: '@macropygia/vite-plugin-pug-static',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 108,
      weekly: 5,
    },
  },
})
