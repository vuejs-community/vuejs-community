import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'hyp-sprites-img',
  description: '基于 Vue 3 + Vite 的雪碧图工具：构建期生成每帧坐标，支持远程图、网格与透明区检测，告别手写 background-position。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'sprite',
    'spritesheet',
    'css-sprite',
  ],
  source: {
    npm: 'hyp-sprites-img',
  },
  links: {
    npm: 'https://www.npmjs.com/package/hyp-sprites-img',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
