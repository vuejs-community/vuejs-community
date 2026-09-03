import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'aai-vite-plugin-mkcert',
  description: 'Provide certificates for vite\'s https dev service',
  version: '1.16.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'certificate',
    'https',
    'mkcert',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liuweiGL/vite-plugin-mkcert',
    npm: 'https://www.npmjs.com/package/aai-vite-plugin-mkcert',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 11,
    },
  },
})
