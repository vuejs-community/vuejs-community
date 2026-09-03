import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ash013/vite-plugin-devshare',
  description: 'Instantly share your Vite dev server with a QR code and public URL — no sign-up needed.',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tunnel',
    'localtunnel',
    'qr',
    'devtools',
    'mobile',
    'share',
    'development',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@ash013/vite-plugin-devshare',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 10,
    },
  },
})
