import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tsr-shared-routes',
  description: 'Mount a shared directory of TanStack Router file-based routes at multiple paths.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'file-based-routing',
    'shared-routes',
    'tanstack',
    'tanstack-router',
    'tanstack-start',
    'vite-plugin',
  ],
  source: {
    github: 'wallpants/tsr-shared-routes',
    npm: 'tsr-shared-routes',
  },
  links: {
    github: 'https://github.com/wallpants/tsr-shared-routes',
    npm: 'https://www.npmjs.com/package/tsr-shared-routes',
    website: 'https://github.com/wallpants/tsr-shared-routes#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 359,
      weekly: 9,
    },
  },
})
