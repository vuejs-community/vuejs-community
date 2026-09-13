import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'flowbite-vue',
  description: 'Flowbite 官方 Vue 3 组件库，基于 Tailwind CSS',
  icon: 'icon:flowbite',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'tailwindcss'],

  source: {
    github: 'themesberg/flowbite-vue',
    npm: 'flowbite-vue',
  },

  links: {
    github: 'https://github.com/themesberg/flowbite-vue',
    npm: 'https://www.npmjs.com/package/flowbite-vue',
  },
  stats: {
    stars: 954,
    downloads: {
      monthly: 40411,
      weekly: 7757,
    },
  },
})
