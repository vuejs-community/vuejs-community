import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fontize/vite',
  description: 'fontize 的 Vite 装配层：构建期静态提取 useText 字面量与子集产物输出、dev 文本收集中间件（不依赖 Nuxt）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'font',
    'font-subset',
    'cjk',
    'webfont',
    'vite',
    'vite-plugin',
    '字体子集',
  ],
  links: {
    github: 'https://github.com/Lionad-Morotar/fontize',
    npm: 'https://www.npmjs.com/package/@fontize/vite',
    website: 'https://github.com/Lionad-Morotar/fontize#readme',
  },
  source: {
    github: 'Lionad-Morotar/fontize',
    npm: '@fontize/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 50,
      weekly: 4,
    },
  },
})
