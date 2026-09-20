import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-circular-hmr',
  description: 'A Vite plugin to fix HMR issues caused by circular imports and dependency cycles',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'hmr',
    'circular-imports',
    'circular-dependency',
    'cyclic-dependency',
    'hot-module-replacement',
    'vite-hmr',
    'dependency-cycle',
    'module-graph',
    'vite-plugin',
    'hmr-loop',
    'vite-full-reload',
    'vite-hmr-fix',
  ],
  links: {
    github: 'https://github.com/cin12211/vite-circular-hmr',
    npm: 'https://www.npmjs.com/package/vite-circular-hmr',
    website: 'https://github.com/cin12211/vite-circular-hmr#readme',
  },
  source: {
    github: 'cin12211/vite-circular-hmr',
    npm: 'vite-circular-hmr',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
