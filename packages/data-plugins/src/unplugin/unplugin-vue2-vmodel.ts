import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue2-vmodel',
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
    github: 'https://github.com/moliyu/unplugin-vue2-vmodel',
    npm: 'https://www.npmjs.com/package/unplugin-vue2-vmodel',
    website: 'https://github.com/moliyu/unplugin-vue2-vmodel#readme',
  },
  source: {
    github: 'moliyu/unplugin-vue2-vmodel',
    npm: 'unplugin-vue2-vmodel',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
