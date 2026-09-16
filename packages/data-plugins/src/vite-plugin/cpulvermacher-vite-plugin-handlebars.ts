import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cpulvermacher/vite-plugin-handlebars',
  description: 'A maintenance fork of @yoichiro/vite-plugin-handlebars that makes Vite a peer dependency and keeps things up to date. Use `1.4.x` as a drop-in replacement for the original plugin (supports Vite 5-8), or `1.5.x` for slightly faster builds (supports Vite 6.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'handlebars',
  ],
  source: {
    github: 'cpulvermacher/vite-plugin-handlebars',
    npm: '@cpulvermacher/vite-plugin-handlebars',
  },
  links: {
    github: 'https://github.com/cpulvermacher/vite-plugin-handlebars',
    npm: 'https://www.npmjs.com/package/@cpulvermacher/vite-plugin-handlebars',
    website: 'https://github.com/cpulvermacher/vite-plugin-handlebars',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 143,
      weekly: 117,
    },
  },
})
