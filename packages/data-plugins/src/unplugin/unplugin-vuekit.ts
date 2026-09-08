import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vuekit',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.0.3',
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
    github: 'hairyf/unplugin-vuekit',
    npm: 'unplugin-vuekit',
  },
  links: {
    github: 'https://github.com/hairyf/unplugin-vuekit',
    npm: 'https://www.npmjs.com/package/unplugin-vuekit',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
