import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-index',
  description: '为指定目录下生成index.ts，在index.ts内导出该目录下所有*.ts文件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-index',
  ],
  links: {
    github: 'https://github.com/gavinning/4a',
    npm: 'https://www.npmjs.com/package/vite-plugin-index',
    website: 'https://github.com/gavinning/4a.git',
  },
  source: {
    github: 'gavinning/4a',
    npm: 'vite-plugin-index',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
