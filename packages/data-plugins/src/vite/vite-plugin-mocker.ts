import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mocker',
  description: '更加方便的模拟本地 mock 服务',
  icon: 'logos:vite-icon',
  version: '1.0.11',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'minjs1cn/vite-plugin-mocker',
    npm: 'vite-plugin-mocker',
  },
  links: {
    github: 'https://github.com/minjs1cn/vite-plugin-mocker',
    npm: 'https://www.npmjs.com/package/vite-plugin-mocker',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 7,
    },
  },
})
