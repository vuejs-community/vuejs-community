import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-emit-qr',
  description: 'Vite plugin for embedding your app in a QR code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'qr-code',
  ],
  source: {
    npm: 'vite-plugin-emit-qr',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-emit-qr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
