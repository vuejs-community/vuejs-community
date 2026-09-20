import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ldesign/auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'astro',
    'webpack',
    'rollup',
    'auto-import',
    'transform',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@ldesign/auto-import',
  },
  source: {
    npm: '@ldesign/auto-import',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
