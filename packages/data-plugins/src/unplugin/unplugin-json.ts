import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json',
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
    github: 'kirklin/unplugin-json',
    npm: 'unplugin-json',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-json',
    npm: 'https://www.npmjs.com/package/unplugin-json',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
