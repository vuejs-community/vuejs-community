import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@caspeco/vite-plugin-local-ssl',
  description: 'Vite plugin to configure a vite dev server to use our SSL certificates and start on the correct hostname.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'Caspeco/LocalSSLVite',
    npm: '@caspeco/vite-plugin-local-ssl',
  },
  links: {
    github: 'https://github.com/Caspeco/LocalSSLVite',
    npm: 'https://www.npmjs.com/package/@caspeco/vite-plugin-local-ssl',
    website: 'https://github.com/Caspeco/LocalSSLVite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 932,
      weekly: 237,
    },
  },
})
