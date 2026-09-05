import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-custom-cursor',
  description: 'A Vite plugin that replaces CSS cursor declarations with custom url-based cursors via source code transformation.通过源代码替换，将CSS鼠标样式替换为自定义鼠标。',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'cursor',
    'custom-cursor',
    'css',
    'less',
    'sass',
    'scss',
    'transform',
    'generate',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-custom-cursor',
  },
  stats: {
    downloads: {
      monthly: 505,
      weekly: 220,
    },
  },
})
