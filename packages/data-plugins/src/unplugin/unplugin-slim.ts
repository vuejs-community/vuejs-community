import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-slim',
  description: 'Detect unused dependencies and source files',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'Alex1990/unplugin-slim',
    npm: 'unplugin-slim',
  },
  links: {
    github: 'https://github.com/Alex1990/unplugin-slim',
    npm: 'https://www.npmjs.com/package/unplugin-slim',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
