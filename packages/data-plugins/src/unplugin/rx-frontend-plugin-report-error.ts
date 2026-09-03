import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rx-frontend/plugin-report-error',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.0',
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
    npm: 'https://www.npmjs.com/package/@rx-frontend/plugin-report-error',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
