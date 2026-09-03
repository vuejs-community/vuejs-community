import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'hyp-sprites-img',
  description: '基于 Vue 3 + Vite 的雪碧图工具：构建期生成每帧坐标，支持远程图、网格与透明区检测，告别手写 background-position。',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'sprite',
    'spritesheet',
    'css-sprite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/hyp-sprites-img',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 4,
    },
  },
})
