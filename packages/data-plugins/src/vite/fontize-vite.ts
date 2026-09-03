import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fontize/vite',
  description: 'fontize 的 Vite 装配层：构建期静态提取 useText 字面量与子集产物输出、dev 文本收集中间件（不依赖 Nuxt）',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'font',
    'font-subset',
    'cjk',
    'webfont',
    'vite',
    'vite-plugin',
    '字体子集',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Lionad-Morotar/fontize',
    npm: 'https://www.npmjs.com/package/@fontize/vite',
  },
  stats: {
    downloads: {
      monthly: 118,
      weekly: 17,
    },
  },
})
