import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-slim',
  description: 'Detect unused dependencies and source files',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'unused',
    'dependencies',
    'source files',
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
    github: 'https://github.com/Alex1990/unplugin-slim',
    npm: 'https://www.npmjs.com/package/unplugin-slim',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 3,
    },
  },
})
