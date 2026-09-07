import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'konsta',
  description: '基于 Tailwind CSS 的移动端（iOS / Material）组件',
  icon: 'icon:konsta',
  category: 'ui',
  types: ['mobile-ui'],
  tags: ['ui', 'mobile', 'tailwindcss'],

  source: {
    github: 'konstaui/konsta',
    npm: 'konsta',
  },

  links: {
    github: 'https://github.com/konstaui/konsta',
    npm: 'https://www.npmjs.com/package/konsta',
    website: 'https://konstaui.com',
  },
  stats: {
    stars: 4246,
    downloads: {
      monthly: 68455,
      weekly: 17989,
    },
  },
})
