import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pimcore-vite-plugin',
  description: 'Pimcore plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pimcore',
    'vite',
    'vite-plugin',
    'vitejs',
    'hot-reload',
  ],
  source: {
    github: 'Carbdrox/pimcore-vite-plugin',
    npm: 'pimcore-vite-plugin',
  },
  links: {
    github: 'https://github.com/Carbdrox/pimcore-vite-plugin',
    npm: 'https://www.npmjs.com/package/pimcore-vite-plugin',
    website: 'https://github.com/Carbdrox/pimcore-vite-plugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 27,
      weekly: 4,
    },
  },
})
