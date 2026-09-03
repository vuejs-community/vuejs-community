import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-command',
  description: '获取package.json中scripts里指令上的参数(build:test->test)添加到环境变量中',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'env',
    'environment',
    'variables',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yaocoding007/vite-plugin-env-command',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-command',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 9,
    },
  },
})
