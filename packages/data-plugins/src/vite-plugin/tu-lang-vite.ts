import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tu-lang/vite',
  description: 'Vite plugin for Tu — compiles .tu source modules on import.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tu',
    'tu-lang',
    'vite',
    'vite-plugin',
    'reactive',
  ],
  source: {
    github: 'mowtwo/tu',
    npm: '@tu-lang/vite',
  },
  links: {
    github: 'https://github.com/mowtwo/tu',
    npm: 'https://www.npmjs.com/package/@tu-lang/vite',
    website: 'https://mowtwo.github.io/tu/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
