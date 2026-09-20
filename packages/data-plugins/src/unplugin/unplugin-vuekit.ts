import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vuekit',
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
    github: 'https://github.com/hairyf/unplugin-vuekit',
    npm: 'https://www.npmjs.com/package/unplugin-vuekit',
    website: 'https://github.com/hairyf/unplugin-vuekit#readme',
  },
  source: {
    github: 'hairyf/unplugin-vuekit',
    npm: 'unplugin-vuekit',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
