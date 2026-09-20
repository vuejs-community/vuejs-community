import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-copy',
  description: '一个vite插件，复制静态资源',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite静态资源复制',
  ],
  links: {
    github: 'https://github.com/crx-96/vite-plugin-file-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-file-copy',
    website: 'https://github.com/crx-96/vite-plugin-file-copy#readme',
  },
  source: {
    github: 'crx-96/vite-plugin-file-copy',
    npm: 'vite-plugin-file-copy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 90,
      weekly: 22,
    },
  },
})
