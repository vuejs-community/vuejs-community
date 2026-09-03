import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-ftp',
  description: '将dist目录下的文件上传到ftp服务器',
  version: '3.4.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'deploy',
    'ftp',
    'upload',
    'publish',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yulin96/vite-plugin-deploy-ftp',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-ftp',
  },
  stats: {
    downloads: {
      monthly: 113,
      weekly: 12,
    },
  },
})
