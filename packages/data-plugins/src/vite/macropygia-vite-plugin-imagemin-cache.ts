import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-imagemin-cache',
  description: 'Vite plugin to compress bundle and public images using imagemin. With persistent cache.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'cache',
    'cachebuster',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-imagemin-cache',
  },
  stats: {
    downloads: {
      monthly: 64,
      weekly: 30,
    },
  },
})
