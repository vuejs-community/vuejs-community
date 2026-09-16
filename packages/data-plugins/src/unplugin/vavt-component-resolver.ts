import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vavt/component-resolver',
  description: '自动化组件按需导入的工具。',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'component',
    'resolver',
    'unplugin',
    'vite',
    'vue',
    'react',
  ],
  source: {
    github: 'imzbf/component-resolver',
    npm: '@vavt/component-resolver',
  },
  links: {
    github: 'https://github.com/imzbf/component-resolver',
    npm: 'https://www.npmjs.com/package/@vavt/component-resolver',
    website: 'https://github.com/imzbf/component-resolver#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 400,
      weekly: 16,
    },
  },
})
