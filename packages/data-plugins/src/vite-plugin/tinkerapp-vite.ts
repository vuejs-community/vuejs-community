import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tinkerapp/vite',
  description: 'Vite plugin for Tinker projects: virtual /nodes/:nodeId previews from .tinker/nodes.json',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tinker',
  ],
  links: {
    github: 'https://github.com/tinkerapp/tinker-app-electron',
    npm: 'https://www.npmjs.com/package/@tinkerapp/vite',
    website: 'https://github.com/tinkerapp/tinker-app-electron#readme',
  },
  source: {
    github: 'tinkerapp/tinker-app-electron',
    npm: '@tinkerapp/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
