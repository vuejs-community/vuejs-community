import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@domtify/auto-import-transformer',
  description: 'Auto-import tool for the domtify library',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'dom',
    'domtify',
    'esbuild',
    'jquery',
    'rollup',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/domtify/auto-import-transformer',
    npm: 'https://www.npmjs.com/package/@domtify/auto-import-transformer',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
