import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wegic-metadata',
  description: 'Vite 插件：为 JSX 元素注入 data-wegic-id 等元数据',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'visual-edit',
    'jsx',
    'metadata',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-wegic-metadata',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 7,
    },
  },
})
