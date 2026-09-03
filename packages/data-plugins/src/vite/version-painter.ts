import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'version-painter',
  description: 'Vite 插件：构建时写入版本脚本并向 HTML 注入构建信息 meta',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'meta',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lazy-people-org/version-painter',
    npm: 'https://www.npmjs.com/package/version-painter',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
