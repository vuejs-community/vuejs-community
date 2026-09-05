import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-version',
  description: '解决浏览器缓存问题。给html文件添加版本号，并生成version.txt文件。',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liuxiaojun666/vite-plugin-html-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-version',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
