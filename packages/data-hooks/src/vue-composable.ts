import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-composable',
  description: '50+ Vue 组合式函数集合，覆盖 i18n、表单校验、分页、fetch 等场景（已停止维护）',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'vue3'],

  source: {
    github: 'pikax/vue-composable',
    npm: 'vue-composable',
  },

  links: {
    github: 'https://github.com/pikax/vue-composable',
    npm: 'https://www.npmjs.com/package/vue-composable',
    website: 'https://vue-composable.netlify.app',
  },

  stats: {
    stars: 1178,
    downloads: {
      monthly: 18911,
      weekly: 5111,
    },
  },
})
