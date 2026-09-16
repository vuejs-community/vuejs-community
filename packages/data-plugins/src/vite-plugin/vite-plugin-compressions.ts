import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compressions',
  description: 'Use gzip or brotli to compress resources.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'vben',
  ],
  source: {
    github: 'anncwb/vite-plugin-compression',
    npm: 'vite-plugin-compressions',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-compression',
    npm: 'https://www.npmjs.com/package/vite-plugin-compressions',
    website: 'https://github.com/anncwb/vite-plugin-compression/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
