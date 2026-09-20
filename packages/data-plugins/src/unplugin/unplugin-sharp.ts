import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sharp',
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
    github: 'https://github.com/byronogis/unplugin-sharp',
    npm: 'https://www.npmjs.com/package/unplugin-sharp',
    website: 'https://github.com/byronogis/unplugin-sharp#readme',
  },
  source: {
    github: 'byronogis/unplugin-sharp',
    npm: 'unplugin-sharp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
