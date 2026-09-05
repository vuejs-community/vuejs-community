import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuedraggable',
  description: 'SortableJS 的 Vue 3 版拖拽排序组件，已停止更新',
  category: 'component',
  types: ['component-library'],
  tags: ['drag-drop'],

  source: {
    github: 'SortableJS/vue.draggable.next',
    npm: 'vuedraggable',
  },

  links: {
    github: 'https://github.com/SortableJS/vue.draggable.next',
    npm: 'https://www.npmjs.com/package/vuedraggable',
  },
  stats: {
    stars: 4500,
    downloads: {
      monthly: 5622286,
      weekly: 1493394,
    },
  },
})
