import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-freeze-deps',
  description: 'Vite plugin that prevents split optimization batches by persisting the discovered dependency list across dev server restarts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'optimize',
    'deps',
    'dependency-optimization',
    'pre-bundle',
    'react',
    'hooks',
    'dev-server',
    'cache',
  ],
  links: {
    github: 'https://github.com/kolodny/vite-plugin-freeze-deps',
    npm: 'https://www.npmjs.com/package/vite-plugin-freeze-deps',
    website: 'https://github.com/kolodny/vite-plugin-freeze-deps#readme',
  },
  source: {
    github: 'kolodny/vite-plugin-freeze-deps',
    npm: 'vite-plugin-freeze-deps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
