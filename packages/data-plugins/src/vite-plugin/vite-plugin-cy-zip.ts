import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cy-zip',
  description: 'vite zip打包产物',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'zip',
  ],
  source: {
    npm: 'vite-plugin-cy-zip',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-cy-zip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
