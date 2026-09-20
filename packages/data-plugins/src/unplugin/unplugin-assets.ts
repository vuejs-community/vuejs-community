import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-assets',
  description: '<img src="https://raw.githubusercontent.com/zyyv/unplugin-assets/main/packages/client/public/logo.svg" style="width:100px;" />',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/zyyv/unplugin-assets',
    npm: 'https://www.npmjs.com/package/unplugin-assets',
    website: 'https://github.com/zyyv/unplugin-assets#readme',
  },
  source: {
    github: 'zyyv/unplugin-assets',
    npm: 'unplugin-assets',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 28,
      weekly: 4,
    },
  },
})
