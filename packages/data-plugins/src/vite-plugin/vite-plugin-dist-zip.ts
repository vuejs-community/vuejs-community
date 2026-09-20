import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dist-zip',
  description: '用于在构建后将文件打入压缩包',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zip',
    'vite-plugin',
    'vite',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dist-zip',
    website: 'https://gitee.com/weiyiPyc/vite-plugin-dist-zip',
  },
  source: {
    npm: 'vite-plugin-dist-zip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 80,
      weekly: 21,
    },
  },
})
