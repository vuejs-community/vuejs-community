import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-export-collector',
  description: 'Recursively get all named export from a file and out-of-the-box support unplugin-auto-import',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 's3xysteak/unplugin-export-collector',
    npm: 'unplugin-export-collector',
  },
  links: {
    github: 'https://github.com/s3xysteak/unplugin-export-collector',
    npm: 'https://www.npmjs.com/package/unplugin-export-collector',
  },
  stats: {
    downloads: {
      monthly: 2417,
      weekly: 198,
    },
  },
})
