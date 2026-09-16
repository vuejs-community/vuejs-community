import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-browser',
  description: 'vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'xparcai/vite-plugin-node-browser',
    npm: 'vite-plugin-node-browser',
  },
  links: {
    github: 'https://github.com/xparcai/vite-plugin-node-browser',
    npm: 'https://www.npmjs.com/package/vite-plugin-node-browser',
    website: 'https://github.com/xparcai/vite-plugin-node-browser#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
