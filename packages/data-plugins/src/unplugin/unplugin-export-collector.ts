import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-export-collector',
  description: 'Recursively get all named export from a file and out-of-the-box support unplugin-auto-import',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'unplugin-auto-import',
    'type',
    'utils',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/s3xysteak/unplugin-export-collector',
    npm: 'https://www.npmjs.com/package/unplugin-export-collector',
  },
  stats: {
    downloads: {
      monthly: 3400,
      weekly: 645,
    },
  },
})
