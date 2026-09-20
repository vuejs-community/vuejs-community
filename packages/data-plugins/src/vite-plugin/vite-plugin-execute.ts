import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-execute',
  description: 'Execute your script after build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'spawn',
    'run',
    'execute',
    'node',
    'electron',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-execute',
  },
  source: {
    npm: 'vite-plugin-execute',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
