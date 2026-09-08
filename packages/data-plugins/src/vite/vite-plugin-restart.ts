import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-restart',
  description: 'Custom files/globs to restart Vite server',
  icon: 'logos:vite-icon',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/vite-plugin-restart',
    npm: 'vite-plugin-restart',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-restart',
    npm: 'https://www.npmjs.com/package/vite-plugin-restart',
  },
  stats: {
    downloads: {
      monthly: 155953,
      weekly: 36415,
    },
  },
})
