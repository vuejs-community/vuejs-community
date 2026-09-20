import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shortcuts',
  description: 'plugin shortcuts into Vite dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'shortcuts',
  ],
  links: {
    github: 'https://github.com/kinfuy/vite-plugin-shortcuts',
    npm: 'https://www.npmjs.com/package/vite-plugin-shortcuts',
    website: 'https://github.com/kinfuy/vite-plugin-shortcuts#readme',
  },
  source: {
    github: 'kinfuy/vite-plugin-shortcuts',
    npm: 'vite-plugin-shortcuts',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
