import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@visill/build',
  description: 'Vite plugins for assembling visill widget skills.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'claude',
    'claude-skill',
    'widget',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@visill/build',
  },
  source: {
    npm: '@visill/build',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 8,
    },
  },
})
