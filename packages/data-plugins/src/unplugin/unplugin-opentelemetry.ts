import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-opentelemetry',
  description: 'Register global imports on demand for Vite and Webpack',
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
  links: {
    github: 'https://github.com/emattiza/unplugin-opentelemetry',
    npm: 'https://www.npmjs.com/package/unplugin-opentelemetry',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 6,
    },
  },
})
