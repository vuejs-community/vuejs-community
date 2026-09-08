import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-actions-kit',
  description: 'A toolkit for GitHub Actions',
  icon: 'icon:dark-unplugin',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'actions',
    'github actions',
    'toolkit',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'rolldown',
    'rspack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'luxass/actions-kit',
    npm: 'unplugin-actions-kit',
  },
  links: {
    github: 'https://github.com/luxass/actions-kit',
    npm: 'https://www.npmjs.com/package/unplugin-actions-kit',
  },
  stats: {
    downloads: {
      monthly: 56,
      weekly: 28,
    },
  },
})
