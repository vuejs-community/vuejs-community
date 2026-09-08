import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopline',
  description: 'Vite plugin providing integration for Shopline themes',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'shopline',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'tyouzu1/vite-template',
    npm: 'vite-plugin-shopline',
  },
  links: {
    github: 'https://github.com/tyouzu1/vite-template',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopline',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
