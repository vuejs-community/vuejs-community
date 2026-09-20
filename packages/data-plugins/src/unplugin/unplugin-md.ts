import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-md',
  description: 'Register global imports on demand for Vite and Webpack',
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
  ],
  links: {
    github: 'https://github.com/lrr/unplugin-md',
    npm: 'https://www.npmjs.com/package/unplugin-md',
    website: 'https://github.com/lrr/unplugin-md#readme',
  },
  source: {
    github: 'lrr/unplugin-md',
    npm: 'unplugin-md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
