import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-modules',
  description: 'vite projects to support Not .module.xxx can use css modules ',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-css-modules',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'wangzongming/vite-plugin-require',
    npm: 'vite-plugin-css-modules',
  },
  links: {
    github: 'https://github.com/wangzongming/vite-plugin-require',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-modules',
  },
  stats: {
    downloads: {
      monthly: 4966,
      weekly: 1394,
    },
  },
})
