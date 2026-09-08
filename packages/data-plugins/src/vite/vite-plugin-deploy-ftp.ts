import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-ftp',
  description: '将dist目录下的文件上传到ftp服务器',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'yulin96/vite-plugin-deploy-ftp',
    npm: 'vite-plugin-deploy-ftp',
  },
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
