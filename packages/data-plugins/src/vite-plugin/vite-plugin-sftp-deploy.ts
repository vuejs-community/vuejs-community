import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sftp-deploy',
  description: 'SFTP uploader plugin to deploy the project trough SSH',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-sftp-deploy',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-sftp-deploy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
