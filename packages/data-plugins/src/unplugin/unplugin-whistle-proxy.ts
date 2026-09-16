import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-whistle-proxy',
  description: 'A proxy plugin for build tools implemented by whistle.',
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
    'transform',
    'proxy',
    'whistle',
  ],
  source: {
    github: 'allenhush/unplugin-whistle-proxy',
    npm: 'unplugin-whistle-proxy',
  },
  links: {
    github: 'https://github.com/allenhush/unplugin-whistle-proxy',
    npm: 'https://www.npmjs.com/package/unplugin-whistle-proxy',
    website: 'https://github.com/allenhush/unplugin-whistle-proxy#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
