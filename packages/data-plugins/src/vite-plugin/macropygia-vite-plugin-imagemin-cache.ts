import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-imagemin-cache',
  description: 'Vite plugin to compress bundle and public images using imagemin. With persistent cache.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'cache',
    'cachebuster',
  ],
  source: {
    github: 'macropygia/static-site-stack',
    npm: '@macropygia/vite-plugin-imagemin-cache',
  },
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-imagemin-cache',
    website: 'https://github.com/macropygia/static-site-stack/tree/main/packages/vite-plugin-imagemin-cache#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 68,
      weekly: 4,
    },
  },
})
