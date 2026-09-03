import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-split',
  description: 'Vite 字体裁剪/分包插件：根据字符集裁剪压缩字体，输出多格式字体与 @font-face 样式，支持自动分包与开发态热重建',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'font',
    'font-subset',
    'subset',
    'woff2',
    'font-split',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/illusionGD/vite-plugin-font-split',
    npm: 'https://www.npmjs.com/package/vite-plugin-font-split',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
