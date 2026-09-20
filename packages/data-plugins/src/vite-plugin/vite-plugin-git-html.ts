import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-html',
  description: '向index.html文件插入git的一些信息 默认插入最新的short commit 和 tag标签到 meta 元素上面',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'git',
    'html',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-git-html',
  },
  source: {
    npm: 'vite-plugin-git-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
