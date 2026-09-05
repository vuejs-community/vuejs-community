import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tresjs',
  description: '声明式 Three.js，用 Vue 组件构建 3D 场景',
  category: 'component',
  types: ['component-library'],
  tags: ['threejs', '3d'],

  source: {
    github: 'Tresjs/tres',
    npm: '@tresjs/core',
  },

  links: {
    github: 'https://github.com/Tresjs/tres',
    npm: 'https://www.npmjs.com/package/@tresjs/core',
  },
  stats: {
    stars: 3695,
    downloads: {
      monthly: 193098,
      weekly: 43068,
    },
  },
})
