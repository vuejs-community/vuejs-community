import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sftp-deploy',
  description: 'SFTP uploader plugin to deploy the project trough SSH',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-sftp-deploy',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
