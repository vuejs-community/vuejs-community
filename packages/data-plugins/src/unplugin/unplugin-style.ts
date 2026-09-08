import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-style',
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
    github: 'kirklin/unplugin-style',
    npm: 'unplugin-style',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-style',
    npm: 'https://www.npmjs.com/package/unplugin-style',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
