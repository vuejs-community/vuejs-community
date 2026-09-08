import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue2-vmodel',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.1.3',
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
  source: {
    github: 'moliyu/unplugin-vue2-vmodel',
    npm: 'unplugin-vue2-vmodel',
  },
  links: {
    github: 'https://github.com/moliyu/unplugin-vue2-vmodel',
    npm: 'https://www.npmjs.com/package/unplugin-vue2-vmodel',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
