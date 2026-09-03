import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@10up/wp-vite-plugins',
  description: 'Vite plugins for building modern WordPress projects the 10up way.',
  version: '1.0.0-alpha.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rolldown',
    'wordpress',
    'gutenberg',
    '10up',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/10up/wp-vite-plugins',
    npm: 'https://www.npmjs.com/package/@10up/wp-vite-plugins',
  },
  stats: {
    downloads: {
      monthly: 781,
      weekly: 113,
    },
  },
})
