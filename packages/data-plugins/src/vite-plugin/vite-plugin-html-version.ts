import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-version',
  description: '解决浏览器缓存问题。给html文件添加版本号，并生成version.txt文件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'version',
  ],
  links: {
    github: 'https://github.com/liuxiaojun666/vite-plugin-html-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-version',
    website: 'https://github.com/liuxiaojun666/vite-plugin-html-version',
  },
  source: {
    github: 'liuxiaojun666/vite-plugin-html-version',
    npm: 'vite-plugin-html-version',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
