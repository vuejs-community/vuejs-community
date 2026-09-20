import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-ftp',
  description: '将dist目录下的文件上传到ftp服务器',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'deploy',
    'ftp',
    'upload',
    'publish',
  ],
  links: {
    github: 'https://github.com/yulin96/vite-plugin-deploy-ftp',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-ftp',
    website: 'https://github.com/yulin96/vite-plugin-deploy-ftp',
  },
  source: {
    github: 'yulin96/vite-plugin-deploy-ftp',
    npm: 'vite-plugin-deploy-ftp',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 40,
      weekly: 9,
    },
  },
})
