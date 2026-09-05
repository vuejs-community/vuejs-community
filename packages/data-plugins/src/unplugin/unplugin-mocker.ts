import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-mocker',
  description: 'Register global imports on demand for Vite and Webpack',
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
  links: {
    github: 'https://github.com/kirklin/unplugin-mocker',
    npm: 'https://www.npmjs.com/package/unplugin-mocker',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
