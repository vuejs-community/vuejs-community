import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-qrcode',
  description: 'Print the QR code of the server address of Vite or Webpack in the console.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
  ],
  source: {
    github: 'stella100np/unplugin-qrcode',
    npm: 'unplugin-qrcode',
  },
  links: {
    github: 'https://github.com/stella100np/unplugin-qrcode',
    npm: 'https://www.npmjs.com/package/unplugin-qrcode',
    website: 'https://github.com/stella100np/unplugin-qrcode#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
