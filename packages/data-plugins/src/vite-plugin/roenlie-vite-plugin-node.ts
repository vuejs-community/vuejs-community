import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@roenlie/vite-plugin-node',
  description: 'Vite plugin to enable your node server HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'node',
    'hmr',
  ],
  source: {
    github: 'roenlie/vite-plugin-node',
    npm: '@roenlie/vite-plugin-node',
  },
  links: {
    github: 'https://github.com/roenlie/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/@roenlie/vite-plugin-node',
    website: 'https://github.com/roenlie/vite-plugin-node#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
