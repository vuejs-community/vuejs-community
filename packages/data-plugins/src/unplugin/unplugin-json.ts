import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json',
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
  source: {
    github: 'kirklin/unplugin-json',
    npm: 'unplugin-json',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-json',
    npm: 'https://www.npmjs.com/package/unplugin-json',
    website: 'https://github.com/kirklin/unplugin-json#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
