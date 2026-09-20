import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-optimize-persist',
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
    github: 'https://github.com/kolodny/vite-optimize-persist',
    npm: 'https://www.npmjs.com/package/vite-optimize-persist',
    website: 'https://github.com/kolodny/vite-optimize-persist#readme',
  },
  source: {
    github: 'kolodny/vite-optimize-persist',
    npm: 'vite-optimize-persist',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
