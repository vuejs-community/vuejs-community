import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-singleton',
  description: '同一项目下 dev 与 preview 各只允许一个实例，重复启动的会退出',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'singleton',
    'dev-server',
    'lock',
    'port',
    'pid',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-singleton',
  },
  source: {
    npm: 'vite-plugin-singleton',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
