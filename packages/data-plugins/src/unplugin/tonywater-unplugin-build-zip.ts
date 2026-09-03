import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tonywater/unplugin-build-zip',
  description: 'An unplugin that zips the build output directory after a successful build',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'build',
    'zip',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DaYePython/unplugin-build-zip',
    npm: 'https://www.npmjs.com/package/@tonywater/unplugin-build-zip',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 12,
    },
  },
})
