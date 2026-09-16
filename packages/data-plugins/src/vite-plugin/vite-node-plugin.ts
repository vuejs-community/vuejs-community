import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-node-plugin',
  description: 'Plugin to use Vite with Node.js as dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'node',
    'istanbul',
    'plugin',
    'instrument',
    'middleware',
  ],
  source: {
    github: 'fargass/vite-node-plugin',
    npm: 'vite-node-plugin',
  },
  links: {
    github: 'https://github.com/fargass/vite-node-plugin',
    npm: 'https://www.npmjs.com/package/vite-node-plugin',
    website: 'github.com:fargass/vite-node-plugin.git',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
