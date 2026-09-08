import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-console',
  description: 'A cross-bundler plugin that forwards browser console.log / info / warn / error to your dev-server terminal in real time.',
  icon: 'icon:dark-unplugin',
  version: '0.0.10',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'Sunny-117/unplugin-console',
    npm: 'unplugin-console',
  },
  links: {
    github: 'https://github.com/Sunny-117/unplugin-console',
    npm: 'https://www.npmjs.com/package/unplugin-console',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 14,
    },
  },
})
