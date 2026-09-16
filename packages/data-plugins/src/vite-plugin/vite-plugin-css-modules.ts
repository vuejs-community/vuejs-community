import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-modules',
  description: 'vite projects to support Not .module.xxx can use css modules ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-css-modules',
  ],
  source: {
    github: 'wangzongming/vite-plugin-require',
    npm: 'vite-plugin-css-modules',
  },
  links: {
    github: 'https://github.com/wangzongming/vite-plugin-require',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-modules',
    website: 'https://github.com/wangzongming/vite-plugin-require#readme',
  },
  stats: {
    stars: 87,
    downloads: {
      monthly: 4031,
      weekly: 789,
    },
  },
})
