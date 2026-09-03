import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'force10-vite',
  description: 'Force10 Vite plugin — auto-generates route manifest',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'inertia',
    'inertiajs',
    'laravel',
    'force10',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/benshawuk/force10',
    npm: 'https://www.npmjs.com/package/force10-vite',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
