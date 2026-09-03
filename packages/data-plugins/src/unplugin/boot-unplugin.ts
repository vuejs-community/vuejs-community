import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'boot-unplugin',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.0',
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
    github: 'https://github.com/kirklin/boot-unplugin',
    npm: 'https://www.npmjs.com/package/boot-unplugin',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
