import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'formkit',
  description: '表单框架，schema 生成表单、40+ 输入类型',
  icon: '',
  category: 'component',
  types: ['form-library'],
  tags: ['schema'],

  source: {
    github: 'formkit/formkit',
    npm: '@formkit/vue',
  },

  links: {
    github: 'https://github.com/formkit/formkit',
    npm: 'https://www.npmjs.com/package/@formkit/vue',
  },
  stats: {
    stars: 4762,
    downloads: {
      monthly: 480284,
      weekly: 78557,
    },
  },
})
