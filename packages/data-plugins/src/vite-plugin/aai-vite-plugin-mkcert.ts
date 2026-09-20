import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'aai-vite-plugin-mkcert',
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
    npm: 'https://www.npmjs.com/package/aai-vite-plugin-mkcert',
    website: 'https://github.com/liuweiGL/vite-plugin-mkcert#readme',
  },
  source: {
    github: 'liuweiGL/vite-plugin-mkcert',
    npm: 'aai-vite-plugin-mkcert',
  },
  stats: {
    stars: 770,
    downloads: {
      monthly: 35,
      weekly: 13,
    },
  },
})
