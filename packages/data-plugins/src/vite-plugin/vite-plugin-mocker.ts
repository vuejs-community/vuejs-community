import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mocker',
  description: '更加方便的模拟本地 mock 服务',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mock',
    'typescript',
  ],
  source: {
    github: 'minjs1cn/vite-plugin-mocker',
    npm: 'vite-plugin-mocker',
  },
  links: {
    github: 'https://github.com/minjs1cn/vite-plugin-mocker',
    npm: 'https://www.npmjs.com/package/vite-plugin-mocker',
    website: 'https://github.com/minjs1cn/vite-plugin-mocker#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 28,
      weekly: 3,
    },
  },
})
