import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sftp-deploy',
  description: 'SFTP uploader plugin to deploy the project trough SSH',
  icon: 'logos:vite-icon',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-sftp-deploy',
  },
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
