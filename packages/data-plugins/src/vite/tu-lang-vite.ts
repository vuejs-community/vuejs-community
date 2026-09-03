import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tu-lang/vite',
  description: 'Vite plugin for Tu — compiles .tu source modules on import.',
  version: '0.1.0-alpha.0',
  category: 'plugin',
  tags: [
    'tu',
    'tu-lang',
    'vite',
    'vite-plugin',
    'reactive',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mowtwo/tu',
    npm: 'https://www.npmjs.com/package/@tu-lang/vite',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
