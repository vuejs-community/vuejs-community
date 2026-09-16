import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@flaminc/vite-plugin-node',
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
    github: 'capitnflam/vite-plugin-node',
    npm: '@flaminc/vite-plugin-node',
  },
  links: {
    github: 'https://github.com/capitnflam/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/@flaminc/vite-plugin-node',
    website: 'https://github.com/capitnflam/vite-plugin-node#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
