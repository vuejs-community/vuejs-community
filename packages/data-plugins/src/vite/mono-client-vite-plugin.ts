import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'mono-client-vite-plugin',
  description: 'Vite plugin for mono-client with health checker, properties API, and dev API call functionality',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'mono-client',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/mono-client-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 7,
    },
  },
})
