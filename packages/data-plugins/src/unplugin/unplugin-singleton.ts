import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-singleton',
  description: 'Unplugin: 单例 dev/preview，就绪后写入锁文件供 E2E、脚本读取',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'rollup',
    'transform',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/cheezone/unplugin-singleton',
    npm: 'https://www.npmjs.com/package/unplugin-singleton',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
