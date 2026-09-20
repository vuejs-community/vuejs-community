import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qrcode',
  description: 'Show QR code on server start',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite',
    'qrcode',
  ],
  links: {
    github: 'https://github.com/svitejs/vite-plugin-qrcode',
    npm: 'https://www.npmjs.com/package/vite-plugin-qrcode',
    website: 'https://github.com/svitejs/vite-plugin-qrcode#readme',
  },
  source: {
    github: 'svitejs/vite-plugin-qrcode',
    npm: 'vite-plugin-qrcode',
  },
  stats: {
    stars: 217,
    downloads: {
      monthly: 66480,
      weekly: 8451,
    },
  },
})
