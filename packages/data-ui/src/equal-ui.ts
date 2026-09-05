import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'equal-ui',
  description: '基于 Tailwind CSS 的 Vue 3 UI 库',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'tailwindcss'],

  source: {
    github: 'Equal-UI/Equal',
    npm: 'equal-vue',
  },

  links: {
    github: 'https://github.com/Equal-UI/Equal',
    npm: 'https://www.npmjs.com/package/equal-vue',
  },
  stats: {
    stars: 1262,
    downloads: {
      monthly: 520,
      weekly: 62,
    },
  },
})
