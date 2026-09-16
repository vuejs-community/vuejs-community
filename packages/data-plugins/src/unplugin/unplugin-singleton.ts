import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-singleton',
  description: 'Unplugin: 单例 dev/preview，就绪后写入锁文件供 E2E、脚本读取',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'rollup',
    'transform',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'cheezone/unplugin-singleton',
    npm: 'unplugin-singleton',
  },
  links: {
    github: 'https://github.com/cheezone/unplugin-singleton',
    npm: 'https://www.npmjs.com/package/unplugin-singleton',
    website: 'https://github.com/cheezone/unplugin-singleton#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
