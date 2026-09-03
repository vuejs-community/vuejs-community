import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-html',
  description: '向index.html文件插入git的一些信息 默认插入最新的short commit 和 tag标签到 meta 元素上面',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'git',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-html',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 0,
    },
  },
})
