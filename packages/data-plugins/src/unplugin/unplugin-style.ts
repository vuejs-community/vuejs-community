import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-style',
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
    github: 'kirklin/unplugin-style',
    npm: 'unplugin-style',
  },
  links: {
    github: 'https://github.com/kirklin/unplugin-style',
    npm: 'https://www.npmjs.com/package/unplugin-style',
    website: 'https://github.com/kirklin/unplugin-style#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
