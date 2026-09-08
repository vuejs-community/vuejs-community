import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-html',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'kirklin/unplugin-html',
    npm: 'unplugin-html',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-html',
    npm: 'https://www.npmjs.com/package/unplugin-html',
  },
  stats: {
    downloads: {
      monthly: 346,
      weekly: 114,
    },
  },
})
