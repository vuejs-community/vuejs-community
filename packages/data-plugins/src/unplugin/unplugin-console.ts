import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-console',
  description: 'A cross-bundler plugin that forwards browser console.log / info / warn / error to your dev-server terminal in real time.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
  ],
  source: {
    github: 'Sunny-117/unplugin-console',
    npm: 'unplugin-console',
  },
  links: {
    github: 'https://github.com/Sunny-117/unplugin-console',
    npm: 'https://www.npmjs.com/package/unplugin-console',
    website: 'https://github.com/Sunny-117/unplugin-console#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 69,
      weekly: 17,
    },
  },
})
