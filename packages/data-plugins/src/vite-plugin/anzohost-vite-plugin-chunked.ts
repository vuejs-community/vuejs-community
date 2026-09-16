import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@anzohost/vite-plugin-chunked',
  description: 'Vite plugin that splits assets into chunks and reassembles them via Service Worker to bypass ISP throttling',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chunked',
    'service-worker',
    'dpi-bypass',
    'cdn',
    'download-manager',
  ],
  source: {
    npm: '@anzohost/vite-plugin-chunked',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@anzohost/vite-plugin-chunked',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 2,
    },
  },
})
