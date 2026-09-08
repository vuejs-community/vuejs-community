import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-url-copy',
  description: 'Auto copy the Vite server URL and generate a QR code for easy access during dev or preview',
  icon: 'logos:vite-icon',
  version: '1.1.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite plugin',
    'QR Code',
    'QRCode',
    'copy server url',
    'vite-plugin-url-copy',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'XioDone/vite-plugin-url-copy',
    npm: 'vite-plugin-url-copy',
  },
  links: {
    github: 'https://github.com/XioDone/vite-plugin-url-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-url-copy',
  },
  stats: {
    downloads: {
      monthly: 2620,
      weekly: 499,
    },
  },
})
