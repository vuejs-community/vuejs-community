import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'contentine',
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
    github: 'https://github.com/baroshem/contentine',
    npm: 'https://www.npmjs.com/package/contentine',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
