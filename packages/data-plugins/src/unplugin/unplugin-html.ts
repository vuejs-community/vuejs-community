import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-html',
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
    github: 'https://github.com/kirklin/unplugin-html',
    npm: 'https://www.npmjs.com/package/unplugin-html',
    website: 'https://github.com/kirklin/unplugin-html#readme',
  },
  source: {
    github: 'kirklin/unplugin-html',
    npm: 'unplugin-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 325,
      weekly: 54,
    },
  },
})
