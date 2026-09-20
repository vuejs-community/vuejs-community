import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-custom-cursor',
  description: 'A Vite plugin that replaces CSS cursor declarations with custom url-based cursors via source code transformation.通过源代码替换，将CSS鼠标样式替换为自定义鼠标。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-custom-cursor',
    website: 'https://github.com/eogic/vite-plugin-custom-cursor',
  },
  source: {
    npm: 'vite-plugin-custom-cursor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 544,
      weekly: 12,
    },
  },
})
