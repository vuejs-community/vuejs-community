import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mkcert',
  description: 'Provide certificates for vite\'s https dev service',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'certificate',
    'https',
    'mkcert',
  ],
  links: {
    github: 'https://github.com/liuweiGL/vite-plugin-mkcert',
    npm: 'https://www.npmjs.com/package/vite-plugin-mkcert',
    website: 'https://github.com/liuweiGL/vite-plugin-mkcert#readme',
  },
  source: {
    github: 'liuweiGL/vite-plugin-mkcert',
    npm: 'vite-plugin-mkcert',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2519171,
      weekly: 463247,
    },
  },
})
