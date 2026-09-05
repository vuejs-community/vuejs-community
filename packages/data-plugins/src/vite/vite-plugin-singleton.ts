import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-singleton',
  description: '同一项目下 dev 与 preview 各只允许一个实例，重复启动的会退出',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'singleton',
    'dev-server',
    'lock',
    'port',
    'pid',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-singleton',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 0,
    },
  },
})
