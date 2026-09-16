import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wegic-metadata',
  description: 'Vite 插件：为 JSX 元素注入 data-wegic-id 等元数据',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'visual-edit',
    'jsx',
    'metadata',
  ],
  source: {
    npm: 'vite-plugin-wegic-metadata',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-wegic-metadata',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 4,
    },
  },
})
