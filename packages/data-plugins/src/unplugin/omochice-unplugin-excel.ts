import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@omochice/unplugin-excel',
  description: 'plugin for bundling excel files with unplugin',
  version: '1.0.1',
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
    github: 'https://github.com/Omochice/unplugin-excel',
    npm: 'https://www.npmjs.com/package/@omochice/unplugin-excel',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 13,
    },
  },
})
