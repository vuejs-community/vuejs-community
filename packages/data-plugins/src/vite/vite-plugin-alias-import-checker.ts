import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-alias-import-checker',
  description: 'A vite plugin designed to validate and ensure the correctness of alias imports in your project.',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'alias checker',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'baozouai/vite-plugin-alias-import-checker',
    npm: 'vite-plugin-alias-import-checker',
  },
  links: {
    github: 'https://github.com/baozouai/vite-plugin-alias-import-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-alias-import-checker',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
