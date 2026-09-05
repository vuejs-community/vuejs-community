import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-freeze-deps',
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
    github: 'https://github.com/kolodny/vite-plugin-freeze-deps',
    npm: 'https://www.npmjs.com/package/vite-plugin-freeze-deps',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
