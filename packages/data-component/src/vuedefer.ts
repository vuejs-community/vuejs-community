import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuedefer',
  description: '基于视口挂载并支持冻结更新的 Vue 延迟渲染组件',
  icon: '',
  category: 'component',
  types: ['component-library'],
  tags: ['lazy-load', 'performance'],

  source: {
    github: 'Alfred-Skyblue/vuedefer',
    npm: 'vuedefer',
  },

  links: {
    github: 'https://github.com/Alfred-Skyblue/vuedefer',
    npm: 'https://www.npmjs.com/package/vuedefer',
    website: 'https://vuedefer.pages.dev',
  },
  stats: {
    stars: 84,
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
