import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@anzohost/vite-plugin-chunked',
  description: 'Vite plugin that splits assets into chunks and reassembles them via Service Worker to bypass ISP throttling',
  version: '1.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chunked',
    'service-worker',
    'dpi-bypass',
    'cdn',
    'download-manager',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@anzohost/vite-plugin-chunked',
  },
  stats: {
    downloads: {
      monthly: 57,
      weekly: 9,
    },
  },
})
