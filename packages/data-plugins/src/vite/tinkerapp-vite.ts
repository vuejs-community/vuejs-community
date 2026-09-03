import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tinkerapp/vite',
  description: 'Vite plugin for Tinker projects: virtual /nodes/:nodeId previews from .tinker/nodes.json',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tinker',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tinkerapp/tinker-app-electron',
    npm: 'https://www.npmjs.com/package/@tinkerapp/vite',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 5,
    },
  },
})
