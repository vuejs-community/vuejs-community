import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pdf',
  description: 'Export PDF bundled by Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pdf',
  ],
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-pdf',
    npm: 'https://www.npmjs.com/package/vite-plugin-pdf',
    website: 'https://github.com/yjl9903/vite-plugin-pdf#readme',
  },
  source: {
    github: 'yjl9903/vite-plugin-pdf',
    npm: 'vite-plugin-pdf',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
