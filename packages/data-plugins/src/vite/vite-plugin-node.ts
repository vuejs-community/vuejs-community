import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node',
  description: 'Vite plugin to enable your node server HMR',
  icon: 'logos:vite-icon',
  version: '8.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'node',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'axe-me/vite-plugin-node',
    npm: 'vite-plugin-node',
  },
  links: {
    github: 'https://github.com/axe-me/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/vite-plugin-node',
  },
  stats: {
    downloads: {
      monthly: 280112,
      weekly: 86842,
    },
  },
})
