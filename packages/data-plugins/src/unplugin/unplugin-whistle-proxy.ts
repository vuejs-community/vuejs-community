import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-whistle-proxy',
  description: 'A proxy plugin for build tools implemented by whistle.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'proxy',
    'whistle',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/allenhush/unplugin-whistle-proxy',
    npm: 'https://www.npmjs.com/package/unplugin-whistle-proxy',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
