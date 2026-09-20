import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lx-frontend/uni-app-plugin-monitor',
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
    npm: 'https://www.npmjs.com/package/@lx-frontend/uni-app-plugin-monitor',
  },
  source: {
    npm: '@lx-frontend/uni-app-plugin-monitor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 3,
    },
  },
})
