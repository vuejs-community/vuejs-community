import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lx-frontend/uni-app-plugin-monitor',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '1.0.0-beta.0',
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
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@lx-frontend/uni-app-plugin-monitor',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 8,
    },
  },
})
