import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@caspeco/vite-plugin-local-ssl',
  description: 'Vite plugin to configure a vite dev server to use our SSL certificates and start on the correct hostname.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Caspeco/LocalSSLVite',
    npm: 'https://www.npmjs.com/package/@caspeco/vite-plugin-local-ssl',
  },
  stats: {
    downloads: {
      monthly: 930,
      weekly: 236,
    },
  },
})
