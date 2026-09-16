import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iframe-communicator',
  description: 'Vite plugin for iframe-host communication, automatically injecting communication logic into iframe projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'iframe',
    'communication',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-iframe-communicator',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-iframe-communicator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
