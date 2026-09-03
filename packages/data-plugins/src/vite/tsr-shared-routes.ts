import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tsr-shared-routes',
  description: 'Mount a shared directory of TanStack Router file-based routes at multiple paths.',
  version: '2.3.0',
  category: 'plugin',
  tags: [
    'file-based-routing',
    'shared-routes',
    'tanstack',
    'tanstack-router',
    'tanstack-start',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wallpants/tsr-shared-routes',
    npm: 'https://www.npmjs.com/package/tsr-shared-routes',
  },
  stats: {
    downloads: {
      monthly: 327,
      weekly: 32,
    },
  },
})
