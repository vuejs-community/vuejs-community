import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dist-zip',
  description: 'Automatically create a ZIP file after build',
  version: '0.0.1',
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
    github: 'https://github.com/kvoon3/unplugin-dist-zip',
    npm: 'https://www.npmjs.com/package/unplugin-dist-zip',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
