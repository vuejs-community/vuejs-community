import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-optimize-persist',
  description: 'Vite plugin that prevents split optimization batches by persisting the discovered dependency list across dev server restarts',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kolodny/vite-optimize-persist',
    npm: 'https://www.npmjs.com/package/vite-optimize-persist',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 0,
    },
  },
})
