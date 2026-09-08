import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-plus',
  description: 'can let vite projects to support require',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'require',
    'vite-plugin',
    'vite-plugin-require-plus',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jeromehan/vite-plugin-require-plus',
    npm: 'vite-plugin-require-plus',
  },
  links: {
    github: 'https://github.com/jeromehan/vite-plugin-require-plus',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-plus',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
