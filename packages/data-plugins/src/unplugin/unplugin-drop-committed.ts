import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-drop-committed',
  description: 'An unplugin that automatically removes committed code (like console.log) from your codebase based on Git history.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'drop-committed',
    'committed',
    'staged',
  ],
  source: {
    github: 'KID-joker/unplugin-drop-committed',
    npm: 'unplugin-drop-committed',
  },
  links: {
    github: 'https://github.com/KID-joker/unplugin-drop-committed',
    npm: 'https://www.npmjs.com/package/unplugin-drop-committed',
    website: 'https://github.com/KID-joker/unplugin-drop-committed#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
