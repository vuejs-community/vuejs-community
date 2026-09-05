import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-env-parsing',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.5',
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
    github: 'https://github.com/hairyf/unplugin-env-parsing',
    npm: 'https://www.npmjs.com/package/unplugin-env-parsing',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
