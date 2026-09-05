import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-time',
  description: 'vite项目记录下本次打包的时间，供生产环境使用',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'time',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-time',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 10,
    },
  },
})
