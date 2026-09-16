import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-print-type',
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
    github: 'm0ksem/unplugin-print-type',
    npm: 'unplugin-print-type',
  },
  links: {
    github: 'https://github.com/m0ksem/unplugin-print-type',
    npm: 'https://www.npmjs.com/package/unplugin-print-type',
    website: 'https://github.com/m0ksem/unplugin-print-type#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
