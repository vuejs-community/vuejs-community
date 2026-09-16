import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'force10-vite',
  description: 'Force10 Vite plugin — auto-generates route manifest',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inertia',
    'inertiajs',
    'laravel',
    'force10',
  ],
  source: {
    github: 'benshawuk/force10',
    npm: 'force10-vite',
  },
  links: {
    github: 'https://github.com/benshawuk/force10',
    npm: 'https://www.npmjs.com/package/force10-vite',
    website: 'https://github.com/benshawuk/force10#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
