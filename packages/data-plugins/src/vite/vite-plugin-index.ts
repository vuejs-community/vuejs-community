import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-index',
  description: '为指定目录下生成index.ts，在index.ts内导出该目录下所有*.ts文件',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-index',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gavinning/4a',
    npm: 'https://www.npmjs.com/package/vite-plugin-index',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
