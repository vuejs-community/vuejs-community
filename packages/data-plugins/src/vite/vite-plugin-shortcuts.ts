import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shortcuts',
  description: 'plugin shortcuts into Vite dev server',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'shortcuts',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kinfuy/vite-plugin-shortcuts',
    npm: 'vite-plugin-shortcuts',
  },
  links: {
    github: 'https://github.com/kinfuy/vite-plugin-shortcuts',
    npm: 'https://www.npmjs.com/package/vite-plugin-shortcuts',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
