import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mkcert-ssl',
  description: 'Vite plugin to load mkcert certificates with CORS support for .test domains',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mkcert',
    'ssl',
    'https',
    'localhost',
  ],
  source: {
    npm: 'vite-plugin-mkcert-ssl',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-mkcert-ssl',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
