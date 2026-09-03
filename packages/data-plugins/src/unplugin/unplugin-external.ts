import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-external',
  description: 'External dependencies when building',
  version: '0.1.0-beta.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'plugin',
    'external',
    'vite',
    'rollup',
    'webpack',
    'esbuild',
    'rspack',
    'farm',
    'rolldown',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-external',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
