import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xieyezi/auto-import',
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
    'rspack',
    'auto-import',
    'transform',
  ],
  source: {
    npm: '@xieyezi/auto-import',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xieyezi/auto-import',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 51,
      weekly: 11,
    },
  },
})
