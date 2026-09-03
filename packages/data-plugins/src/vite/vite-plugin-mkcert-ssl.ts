import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mkcert-ssl',
  description: 'Vite plugin to load mkcert certificates with CORS support for .test domains',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mkcert',
    'ssl',
    'https',
    'localhost',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-mkcert-ssl',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
