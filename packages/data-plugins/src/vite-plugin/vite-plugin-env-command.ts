import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-command',
  description: '获取package.json中scripts里指令上的参数(build:test->test)添加到环境变量中',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'env',
    'environment',
    'variables',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  source: {
    github: 'yaocoding007/vite-plugin-env-command',
    npm: 'vite-plugin-env-command',
  },
  links: {
    github: 'https://github.com/yaocoding007/vite-plugin-env-command',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-command',
    website: 'https://github.com/yaocoding007/vite-plugin-env-command',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
