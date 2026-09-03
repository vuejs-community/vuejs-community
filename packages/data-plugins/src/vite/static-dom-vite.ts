import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@static-dom/vite',
  description: 'Vite plugin that configures the SDOM JSX runtime',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'static-dom',
    'sdom',
    'vite',
    'vite-plugin',
    'jsx',
    'jsx-runtime',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/joshburgess/static-dom',
    npm: 'https://www.npmjs.com/package/@static-dom/vite',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 4,
    },
  },
})
