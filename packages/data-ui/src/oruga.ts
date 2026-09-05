import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'oruga',
  description: '不绑定任何 CSS 框架的轻量 Vue 组件库',
  category: 'ui',
  types: ['ui-library', 'headless-ui'],
  tags: ['ui', 'css-agnostic'],

  source: {
    github: 'oruga-ui/oruga',
    npm: '@oruga-ui/oruga-next',
  },

  links: {
    github: 'https://github.com/oruga-ui/oruga',
    npm: 'https://www.npmjs.com/package/@oruga-ui/oruga-next',
  },
  stats: {
    stars: 1161,
    downloads: {
      monthly: 34001,
      weekly: 7032,
    },
  },
})
