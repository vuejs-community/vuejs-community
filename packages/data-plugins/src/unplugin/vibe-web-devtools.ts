import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vibe-web-devtools',
  description: 'A vite plugin that allow you direct chat with your claude code',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
  ],
  source: {
    npm: 'vibe-web-devtools',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vibe-web-devtools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
