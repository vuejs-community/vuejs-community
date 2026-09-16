import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-image',
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
    github: 'antfu/unplugin-starter',
    npm: 'unplugin-vue-image',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/unplugin-vue-image',
    website: 'https://github.com/antfu/unplugin-starter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
