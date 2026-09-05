import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-drop-committed',
  description: 'An unplugin that automatically removes committed code (like console.log) from your codebase based on Git history.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'drop-committed',
    'committed',
    'staged',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/KID-joker/unplugin-drop-committed',
    npm: 'https://www.npmjs.com/package/unplugin-drop-committed',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
