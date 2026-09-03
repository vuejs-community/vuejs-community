import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-glob-input',
  description: 'Vite plugin to add files to build.rollupOptions.input using fast-glob',
  version: '0.0.18',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'glob',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-glob-input',
  },
  stats: {
    downloads: {
      monthly: 94,
      weekly: 33,
    },
  },
})
