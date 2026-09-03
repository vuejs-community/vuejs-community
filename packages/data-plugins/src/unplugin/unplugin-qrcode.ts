import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-qrcode',
  description: 'Print the QR code of the server address of Vite or Webpack in the console.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/stella100np/unplugin-qrcode',
    npm: 'https://www.npmjs.com/package/unplugin-qrcode',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
