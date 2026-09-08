import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mkcert',
  description: 'Provide certificates for vite\'s https dev service',
  icon: 'logos:vite-icon',
  version: '2.1.0',
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
  source: {
    github: 'liuweiGL/vite-plugin-mkcert',
    npm: 'vite-plugin-mkcert',
  },
  links: {
    github: 'https://github.com/liuweiGL/vite-plugin-mkcert',
    npm: 'https://www.npmjs.com/package/vite-plugin-mkcert',
  },
  stats: {
    downloads: {
      monthly: 2726210,
      weekly: 686142,
    },
  },
})
