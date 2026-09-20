import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-split',
  description: 'Vite 字体裁剪/分包插件：根据字符集裁剪压缩字体，输出多格式字体与 @font-face 样式，支持自动分包与开发态热重建',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'font',
    'font-subset',
    'subset',
    'woff2',
    'font-split',
  ],
  links: {
    github: 'https://github.com/illusionGD/vite-plugin-font-split',
    npm: 'https://www.npmjs.com/package/vite-plugin-font-split',
    website: 'https://github.com/illusionGD/vite-plugin-font-split#readme',
  },
  source: {
    github: 'illusionGD/vite-plugin-font-split',
    npm: 'vite-plugin-font-split',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
