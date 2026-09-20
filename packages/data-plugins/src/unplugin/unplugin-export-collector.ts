import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-export-collector',
  description: 'Recursively get all named export from a file and out-of-the-box support unplugin-auto-import',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'unplugin-auto-import',
    'type',
    'utils',
  ],
  links: {
    github: 'https://github.com/s3xysteak/unplugin-export-collector',
    npm: 'https://www.npmjs.com/package/unplugin-export-collector',
    website: 'https://github.com/s3xysteak/unplugin-export-collector',
  },
  source: {
    github: 's3xysteak/unplugin-export-collector',
    npm: 'unplugin-export-collector',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 2286,
      weekly: 319,
    },
  },
})
