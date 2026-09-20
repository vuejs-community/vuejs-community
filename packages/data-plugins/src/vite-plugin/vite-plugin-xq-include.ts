import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xq-include',
  description: 'A vite file include plugin that supports template variables.一个支持模板变量的 Vite 文件包含插件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'include',
    'replace',
    'split html',
    'inject html',
    'html',
    'html-loader',
    'loader',
  ],
  links: {
    github: 'https://github.com/xqkeji/vite-plugin-xq-include',
    npm: 'https://www.npmjs.com/package/vite-plugin-xq-include',
    website: 'http://xqkeji.cn/',
  },
  source: {
    github: 'xqkeji/vite-plugin-xq-include',
    npm: 'vite-plugin-xq-include',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
