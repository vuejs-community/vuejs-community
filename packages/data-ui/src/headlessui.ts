import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'headlessui',
  description: 'Tailwind Labs 官方无样式可访问组件库（支持 Vue）',
  category: 'ui',
  types: ['headless-ui'],
  tags: ['ui', 'headless-ui', 'tailwindcss'],

  source: {
    github: 'tailwindlabs/headlessui',
    npm: '@headlessui/vue',
  },

  links: {
    github: 'https://github.com/tailwindlabs/headlessui',
    npm: 'https://www.npmjs.com/package/@headlessui/vue',
    website: 'https://headlessui.com',
  },
  stats: {
    stars: 28732,
    downloads: {
      monthly: 6018067,
      weekly: 1617853,
    },
  },
})
