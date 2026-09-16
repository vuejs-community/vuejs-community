import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'td-vite-plugin-eslint',
  description: 'ESLint plugin for vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'eslint',
    'vite-plugin',
  ],
  source: {
    github: 'includeios/vite-plugin-eslint',
    npm: 'td-vite-plugin-eslint',
  },
  links: {
    github: 'https://github.com/includeios/vite-plugin-eslint',
    npm: 'https://www.npmjs.com/package/td-vite-plugin-eslint',
    website: 'https://github.com/includeios/vite-plugin-eslint',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
