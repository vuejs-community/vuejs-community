import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pages',
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
    github: 'https://github.com/linhuibin98/unplugin-pages',
    npm: 'https://www.npmjs.com/package/unplugin-pages',
    website: 'https://github.com/linhuibin98/unplugin-pages#readme',
  },
  source: {
    github: 'linhuibin98/unplugin-pages',
    npm: 'unplugin-pages',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
