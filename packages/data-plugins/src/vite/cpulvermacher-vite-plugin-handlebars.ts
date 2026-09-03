import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cpulvermacher/vite-plugin-handlebars',
  description: 'A maintenance fork of @yoichiro/vite-plugin-handlebars that makes Vite a peer dependency and keeps things up to date. Use `1.4.x` as a drop-in replacement for the original plugin (supports Vite 5-8), or `1.5.x` for slightly faster builds (supports Vite 6.',
  version: '1.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'handlebars',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cpulvermacher/vite-plugin-handlebars',
    npm: 'https://www.npmjs.com/package/@cpulvermacher/vite-plugin-handlebars',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 5,
    },
  },
})
