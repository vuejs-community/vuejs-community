import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mkcert-ssl',
  description: 'Vite plugin to load mkcert certificates with CORS support for .test domains',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-mkcert-ssl',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-mkcert-ssl',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
