import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@domtify/auto-import-transformer',
  description: 'Auto-import tool for the domtify library',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'domtify/auto-import-transformer',
    npm: '@domtify/auto-import-transformer',
  },
  links: {
    github: 'https://github.com/domtify/auto-import-transformer',
    npm: 'https://www.npmjs.com/package/@domtify/auto-import-transformer',
    website: 'https://github.com/domtify/auto-import-transformer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
