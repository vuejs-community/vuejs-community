import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@static-dom/vite',
  description: 'Vite plugin that configures the SDOM JSX runtime',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'static-dom',
    'sdom',
    'vite',
    'vite-plugin',
    'jsx',
    'jsx-runtime',
  ],
  source: {
    github: 'joshburgess/static-dom',
    npm: '@static-dom/vite',
  },
  links: {
    github: 'https://github.com/joshburgess/static-dom',
    npm: 'https://www.npmjs.com/package/@static-dom/vite',
    website: 'https://github.com/joshburgess/static-dom#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
