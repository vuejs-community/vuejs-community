import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ant-design-vue',
  description: 'Ant Design 的 Vue 企业级组件库实现',
  icon: 'icon:ant-design-vue',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'ant-design'],

  source: {
    github: 'vueComponent/ant-design-vue',
    npm: 'ant-design-vue',
  },

  links: {
    github: 'https://github.com/vueComponent/ant-design-vue',
    npm: 'https://www.npmjs.com/package/ant-design-vue',
    website: 'https://antdv.com',
  },
  stats: {
    stars: 21643,
    downloads: {
      monthly: 942627,
      weekly: 168488,
    },
  },
})
