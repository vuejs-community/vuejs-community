import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-interface-to-object',
  description: 'Vite plugin for generating interface guards during Vite builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-interface-to-object',
  },
  source: {
    npm: 'vite-plugin-interface-to-object',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
