import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node',
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
    github: 'axe-me/vite-plugin-node',
    npm: 'vite-plugin-node',
  },
  links: {
    github: 'https://github.com/axe-me/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/vite-plugin-node',
    website: 'https://github.com/axe-me/vite-plugin-node#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 283583,
      weekly: 52147,
    },
  },
})
