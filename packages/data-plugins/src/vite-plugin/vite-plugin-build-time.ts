import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-time',
  description: 'vite项目记录下本次打包的时间，供生产环境使用',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'time',
  ],
  source: {
    npm: 'vite-plugin-build-time',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-build-time',
    website: 'https://gitee.com/lihanspace/vite-plugin-build-time#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
