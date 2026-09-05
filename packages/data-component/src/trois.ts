import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'trois',
  description: 'Three.js + Vue 3 的早期方案，已停止维护，新项目建议选 TresJS',
  category: 'component',
  types: ['component-library'],
  tags: ['threejs', '3d'],

  source: {
    github: 'troisjs/trois',
    npm: 'trois',
  },

  links: {
    github: 'https://github.com/troisjs/trois',
    npm: 'https://www.npmjs.com/package/trois',
  },
  stats: {
    stars: 4499,
    downloads: {
      monthly: 83,
      weekly: 33,
    },
  },
})
